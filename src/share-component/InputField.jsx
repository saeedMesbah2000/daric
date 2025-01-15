import React, {useState} from "react";

const InputField = ({id, label, type, register, errors, validation}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    setIsFocused(false);
    setHasValue(event.target.value.trim() !== "");
  };

  return (
    <div className="relative flex flex-col w-full">
      <label
        htmlFor={id}
        className={`absolute right-2 text-sm font-semibold transform transition-all duration-300 ${
          isFocused || hasValue
            ? "top-[-25px] text-xs text-purple-500"
            : "top-3 text-gray-700"
        }`}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...register(id, validation)}
        aria-label={label}
        className={`shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ${
          errors[id] ? "border-red-600" : "border-gray-300"
        }`}
      />

      {errors[id] && (
        <span className="text-red-600 text-xs mt-1">{errors[id].message}</span>
      )}
    </div>
  );
};

export default InputField;
