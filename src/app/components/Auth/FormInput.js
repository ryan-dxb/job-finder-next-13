"use client";

import React, { useState } from "react";

const FormInput = ({ name, labelName, type, value, required }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(name, labelName, type, value, required);
  return (
    <div>
      <div className="relative w-full px-3 py-4 mt-6 border  rounded-lg h-12 ">
        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold bg-white px-2 ">
          {labelName + (required ? " *" : "")}
        </span>
        <input
          id={name.toLowerCase()}
          type={type}
          value={value}
          //   onChange={setValue}
          //   required={required}
          //   onBlur={handleBlur}
          className="block w-full text-sm font-medium  bg-transparent outline-none focus:outline-none focus:bg-transparent focus:ring-0 webkit-appearance-none "
        />
      </div>
      {/* {touched && error ? (
        <span className="text-xs font-semibold text-red-500 ">{error}</span>
      ) : null} */}
    </div>
  );
};

export default FormInput;
