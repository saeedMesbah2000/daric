import React from "react";

const InputField = ({id, label, type, placeholder}) => (
  <div className="flex flex-col w-full">
    <label
      htmlFor={id}
      className="block text-gray-700 text-sm font-semibold mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      aria-label={label}
      className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
    />
  </div>
);

export default InputField;
