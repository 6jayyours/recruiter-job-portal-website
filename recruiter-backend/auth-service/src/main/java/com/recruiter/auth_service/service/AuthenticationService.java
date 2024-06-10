package com.recruiter.auth_service.service;

import com.recruiter.auth_service.model.Role;
import com.recruiter.auth_service.model.User;
import com.recruiter.auth_service.model.request.AuthenticationRequest;
import com.recruiter.auth_service.model.request.RegisterRequest;
import com.recruiter.auth_service.model.response.AuthenticationResponse;
import com.recruiter.auth_service.model.response.RegisterResponse;
import com.recruiter.auth_service.repository.UserRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AuthenticationService {

    //upload directory paths
    public static String uploadDir1 = System.getProperty("user.dir") + "/src/main/resources/static/DocImages";
    public String uploadDir2 = Paths.get("src", "main", "resources", "static", "DocImages").toString();


    // OTP expiry time in seconds
    private static final long OTP_EXPIRY_SECONDS = 30;
    private final Map<String, LocalDateTime> otpMap = new ConcurrentHashMap<>();


    // dependencies
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final JavaMailSender javaMailSender;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(JavaMailSender javaMailSender,UserRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.javaMailSender = javaMailSender;
        this.userRepository = repository;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // Register a new user
    public RegisterResponse register(RegisterRequest request) {
        // Check if username or email already exists
        if (userRepository.existsByUsername(request.getUsername())) {
            return new RegisterResponse(null, "Username already exists.");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            return new RegisterResponse(null, "Email already exists.");
        }
        try {
            // Generate OTP
            String otp = generateOTP();

            // Create new user
            User user = new User();
            user.setFirstName(request.getFirstname());
            user.setLastName(request.getLastname());
            user.setUsername(request.getUsername());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setEmail(request.getEmail());
            user.setStatus(true);
            user.setRole(request.getRole());

            if (Role.USER.equals(request.getRole())) {
                user.setOtp(otp);
                sendOTPEmail(user.getEmail(), otp); // Send OTP email
            }
            // Save user and store OTP
            user = userRepository.save(user);
            otpMap.put(otp, LocalDateTime.now());

            // Generate JWT token
            String jwtToken = jwtService.generateToken(user);
            return new RegisterResponse(jwtToken, "User registered successfully.");
        } catch (Exception e) {
            // Handle any unexpected exceptions
            e.printStackTrace();
            return new RegisterResponse(null, "Registration failed. Please try again.");
        }
    }

    // Authenticate a user
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try {
            // Authenticate user credentials
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );

            // Fetch user details
            User user = userRepository.findByUsername(request.getUsername()).orElseThrow();

            if (!user.isStatus()) {
                // User is blocked or inactive
                return new AuthenticationResponse(null, null, "User is blocked", null);
            }

            // Generate JWT token
            String jwtToken = jwtService.generateToken(user);
            return new AuthenticationResponse(user.getId(), jwtToken, "User logged in successfully", user.getRole());
        } catch (AuthenticationException e) {
            // authentication failure
            return new AuthenticationResponse(null, null, "Invalid username or password", null);
        } catch (Exception e) {
            // unexpected exceptions
            e.printStackTrace();
            return new AuthenticationResponse(null, null, "Authentication failed. Please try again.", null);
        }
    }

    // Generate a random 4-digit OTP
    public String generateOTP() {
        StringBuilder otp = new StringBuilder();
        for (int i = 0; i < 4; i++) {
            otp.append((int) (Math.random() * 10));
        }
        return otp.toString();
    }

    // Send OTP email
    public void sendOTPEmail(String to, String otp) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("marjunramesh@gmail.com"); // From email address
            message.setTo(to);
            message.setSubject("OTP Verification");
            message.setText("Your OTP for registration is: " + otp);
            javaMailSender.send(message);
            System.out.println("Sent OTP email to: " + to);
        } catch (Exception e) {
            // email sending failure
            e.printStackTrace();
            System.out.println("Failed to send OTP email to: " + to);
        }
    }
}
