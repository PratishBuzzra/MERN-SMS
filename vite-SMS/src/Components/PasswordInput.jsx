import React, { useState } from 'react';
import { RxEyeOpen } from "react-icons/rx";
import { RiEyeCloseFill } from "react-icons/ri";

const PasswordInput = ({ id, placeholder, value, onChange, required }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPass ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="button"
        onClick={() => setShowPass((prev) => !prev)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label={showPass ? "Hide password" : "Show password"}
      >
        {showPass ? <RxEyeOpen size={20} /> : <RiEyeCloseFill size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
