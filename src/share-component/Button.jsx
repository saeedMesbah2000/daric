import React from "react";

const Button = ({
  type = "button",
  onClick,
  text,
  className = "",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-gradient-to-r from-yellow-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg transition-transform duration-300 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "hover:from-yellow-600 hover:to-purple-600"
        }
        ${loading ? "cursor-wait" : ""}
        ${className}`}
      disabled={disabled || loading}>
      {loading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="none"
              d="M4 12a8 8 0 018-8V4a12 12 0 00-12 12h4z"></path>
          </svg>
          Loading...
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
