import React from "react";
import { FaSearch, FaUser ,FaEye,FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
function FormInput({ type, placeholder, name }) {
  const [showPassword, setShowPassword] =useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <label className="input input-bordered flex items-center gap-2 w-full input-sm md:input-md">
      <input
        type={showPassword ? "text" : type} 
        placeholder={placeholder}
        name={name}
      />
      {placeholder == "Search" && (
        <FaSearch className="h-4 w-4 opacity-70 cursor-pointer" />
      )}
      {placeholder == "Full Name" && (
        <FaUser className="h-4 w-4 opacity-70 cursor-pointer" />
      )}
      {placeholder == "Email" && (
        <MdEmail className="h-4 w-4 opacity-70 cursor-pointer" />
      )}
      {(placeholder === "Password" || placeholder === "Confirm Password") && (
        <span onClick={togglePassword} className="cursor-pointer">
          {showPassword ? (
            <FaEyeSlash className="h-4 w-4 opacity-70" />
          ) : (
            <FaEye className="h-4 w-4 opacity-70" />
          )}
        </span>
      )}
    </label>
  );
}

export default FormInput;
