import React, {useState} from "react";

/**
 * InputField Component
 * A reusable and accessible input field with support for React Hook Form and inline validation.
 *
 * Props:
 * @param {string} id - The unique identifier for the input field (used for form registration and labeling).
 * @param {string} label - The text label displayed for the input field.
 * @param {string} type - The input type (e.g., "text", "email", "password").
 * @param {function} register - React Hook Form's `register` function for form handling.
 * @param {object} errors - The `errors` object from React Hook Form for validation error messages.
 * @param {object} validation - Validation rules for the input field, compatible with React Hook Form.
 * @param {string} value - The initial value for the input field (default is an empty string).
 * @returns {JSX.Element} A styled input field component with validation and dynamic label positioning.
 */
const InputField = ({
  id,
  label,
  type,
  register,
  errors,
  validation,
  value = null,
}) => {
  // State to track focus and whether the field has a value
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(value);

  // Handlers for focus and blur events
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    debugger;
    setIsFocused(false);
    setHasValue(event.target.value); // Check if the field has a value
  };

  return (
    <div className="relative flex flex-col w-full">
      {/* Label */}
      <label
        htmlFor={id}
        className={`absolute right-2 text-sm font-semibold transform transition-all duration-300 ${
          isFocused || hasValue
            ? "top-[-25px] text-xs text-purple-500"
            : "top-3 text-gray-700"
        }`}>
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...register(id, {...validation, value: value})} // Register input with default value
        value={value}
        aria-label={label} // Accessibility label
        className={`shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ${
          errors[id] ? "border-red-600" : "border-gray-300"
        }`}
      />

      {/* Error Message */}
      {errors[id] && (
        <span className="text-red-600 text-xs mt-1">{errors[id].message}</span>
      )}
    </div>
  );
};

export default InputField;
