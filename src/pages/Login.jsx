import React, { useEffect } from "react";
import { Form } from "react-router-dom";
import { FormInput } from "../components";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useActionData } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("displayName");
  const email = form.get("email");
  const password = form.get("password");
  const confirm_password = form.get("confirm_password");

  return {
    email,
    password,
  };
};

function Login() {
  const inputData = useActionData();
  const { registerWithGoogle } = useRegister();
  const { loginWithEmail } = useLogin();
  useEffect(() => {
    if (inputData) {
      loginWithEmail(inputData.email, inputData.password);
      
    }
  }, [inputData]);
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="w-[40%] bg-[url('https://picsum.photos/800/900')] bg-cover bg-center hidden md:flex"></div>
      <div className="fixed w-full bottom-0 left-0 top-0 bg-black/30 md:hidden"></div>
      <div className="w-full md:w-[60%] flex flex-col justify-center items-center bg-gray-100 p-6  bg-[url('https://picsum.photos/800/900')] bg-cover bg-center md:bg-none">
        <Form
          method="post"
          className="w-full max-w-96 px-5 md:px-0 z-10 relative"
        >
          <h1 className="text-2xl text-white md:text-black md:text-4xl text-center font-medium mb-5">
            Login
          </h1>
          <div className="flex flex-col gap-3 md:gap-5">
            <FormInput placeholder="Email" name="email" type="email" />
            <FormInput placeholder="Password" name="password" type="password" />
          </div>
          <div className="mt-3">
            <Link className=" text-white text-sm md:text-black md:text-base cursor-pointer hover:underline w-[125px] link-primary">
              Forgot Password?
            </Link>
          </div>
          <div className="flex gap-3 md:gap-5 mt-5 md:mt-10 flex-col md:flex-row">
            <button
              type="submit"
              className="btn btn-primary grow btn-sm md:btn-md"
            >
              Login
            </button>
            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn btn-secondary grow btn-sm md:btn-md "
            >
              <FcGoogle className="w-5 h-5" /> <span>Google</span>
            </button>
          </div>
          <div className="flex text-white text-sm md:text-base md:text-black justify-center mt-5 md:mt-7">
            <h3 className="text-md">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="pb-1 hover:underline transition-all duration-200 "
              >
                Register
              </Link>
            </h3>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
