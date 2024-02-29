FROM openjdk:17-jdk
COPY target/api-gateway.jar .
EXPOSE 8081
ENV EUREKA_HOST=service-registry
ENTRYPOINT ["java", "-jar", "api-gateway.jar"]