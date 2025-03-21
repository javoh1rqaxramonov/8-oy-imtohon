import React from "react";
import { FaSearch } from "react-icons/fa";

function FormInput({ type, placeholder, name }) {
  return (
    <label className="input input-bordered flex items-center gap-2 w-full input-sm md:input-md">
      <input type={type} required placeholder={placeholder} name={name} />
      <FaSearch className="h-4 w-4 opacity-70 cursor-pointer" />
    </label>
  );
}

export default FormInput;
