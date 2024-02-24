import React from "react";
import logo from "../../assets/logo.png";

const HirerRegister = () => {
  return (
    <>
      <section className="h-screen flex-items-center justify-center relative overflow-hidden ">
       <div className="absolute insert-0 ">
       <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="relative overflow-hidden bg-white shadow-lg rounded-md">
              <div className="p-6">
                <div className="flex flex-row items-center justify-center md:justify-center lg:justify-start w-full md:w-auto lg:w-auto">
                  <img src={logo} alt="Recruiter Logo" className="w-11 mr-4" />
                  <h1 className="text-xl font-bold">Recruiter</h1>
                </div>

                <h5 className="my-6 text-xl font-semibold">
                  Recruiter Registration
                </h5>
                <form className="text-left">
                  <div className="grid grid-cols-1 ">
                    <div className="mb-4">
                      <label className="font-semibold">Email :</label>
                      <input
                        className="form-input mt-3 rounded-md "
                        type="email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="font-semibold">Password :</label>
                      <input
                        className="form-input mt-3 rounded-md "
                        type="password"
                      />
                    </div>
                    <div className="flex justify-between mb-4">
                      <div>
                        <input
                          className="rounded border-gray-200 text-indigo-600 focus:border-indigo-300 focus:ring focus:right-offset-0 focus:ring-indigo-300  focus-ring-opacity-50 me-2 "
                          type="checkbox"
                        />
                        <label className="text-slate-400">Remember Me</label>
                      </div>
                      <div>
                        <a className="text-slate-400">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="submit"
                        className=" cursor-pointer bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                        value="Register"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-slate-500 me-2">
                        Already account?
                      </span>
                      <a className="text-indigo-700 font-bold cursor-pointer">
                        Sign In
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default HirerRegister;

i need to alter this react component 
1)make this react component responsiove for small medium large and xl devices
3)add additional designs styles or features if needed
4) make this a modern react website
 <div className="relative overflow-hidden bg-white shadow-lg rounded-md">
              <div className="p-6">
                <div className="flex flex-row items-center justify-center md:justify-center lg:justify-start w-full md:w-auto lg:w-auto">
                  <img src={logo} alt="Recruiter Logo" className="w-11 mr-4" />
                  <h1 className="text-xl font-bold">Recruiter</h1>
                </div>

                <h5 className="my-6 text-xl font-semibold">
                  Recruiter Registration
                </h5>
                <form className="text-left">
                  <div className="grid grid-cols-1 ">
                    <div className="mb-4">
                      <label className="font-semibold">Email :</label>
                      <input
                        className="form-input mt-3 rounded-md "
                        type="email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="font-semibold">Password :</label>
                      <input
                        className="form-input mt-3 rounded-md "
                        type="password"
                      />
                    </div>
                    <div className="flex justify-between mb-4">
                      <div>
                        <input
                          className="rounded border-gray-200 text-indigo-600 focus:border-indigo-300 focus:ring focus:right-offset-0 focus:ring-indigo-300  focus-ring-opacity-50 me-2 "
                          type="checkbox"
                        />
                        <label className="text-slate-400">Remember Me</label>
                      </div>
                      <div>
                        <a className="text-slate-400">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="submit"
                        className=" cursor-pointer bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                        value="Register"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-slate-500 me-2">
                        Already account?
                      </span>
                      <a className="text-indigo-700 font-bold cursor-pointer">
                        Sign In
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
make this div justify end 
add necessary padding and margin