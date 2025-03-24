import React from "react";
import { Form } from "react-router-dom";
import { FormInput } from "../components";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="w-[40%] bg-[url('https://picsum.photos/800/900')] bg-cover bg-center hidden md:flex"></div>

      <div className="w-full md:w-[60%] flex flex-col justify-center items-center bg-gray-100 p-6  bg-[url('https://picsum.photos/800/900')] bg-cover bg-center md:bg-none">
        <Form method="post" className="w-full max-w-96 px-5 md:px-0">
          <h1 className="text-2xl text-white md:text-black md:text-4xl text-center font-medium mb-5 text-black">
            Login
          </h1>
          <div className="flex flex-col gap-3 md:gap-5">
            <FormInput placeholder="Email" name="email" type="email" />
            <FormInput placeholder="Password" name="password" type="password" />
          </div>
          <div className="mt-3">
            <Link className=" text-white md:text-black cursor-pointer hover:underline w-[125px] link-primary">Forgot Password?</Link>
          </div>
          <div className="flex gap-3 md:gap-5 mt-5 md:mt-10 flex-col md:flex-row">
            <button
              type="submit"
              className="btn btn-primary grow btn-sm md:btn-md"
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-secondary grow btn-sm md:btn-md "
            >
              <FcGoogle className="w-5 h-5" /> <span>Google</span>
            </button>
          </div>
          <div className="flex text-white md:text-black justify-center mt-5 md:mt-7">
            <h3 className="text-md">
              Don't have an account? <Link to="/register" className="pb-1 hover:underline transition-all duration-200 ">Register</Link>
            </h3>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
