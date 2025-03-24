import React from "react";
import { Form } from "react-router-dom";
import {FormInput} from "../components";

function Register() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="w-[40%] bg-[url('https://picsum.photos/800/900')] bg-cover bg-center"></div>

      <div className="w-[60%] flex flex-col justify-center items-center bg-gray-100 p-6">
        <Form method='post' className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4 text-black">Register</h1>
          <div className='flex flex-col gap-5'>
            <FormInput placeholder='Full Name' name='displayName' type='text'/>
            <FormInput placeholder='Email' name='email' type='email'/>
            <FormInput placeholder='Password' name='password' type='password'/>
            <FormInput placeholder='Confirm Password' name='password' type='password'/>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
