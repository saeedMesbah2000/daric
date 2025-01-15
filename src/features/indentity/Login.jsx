import React, {useState} from "react";
import {Link} from "react-router";
import {Button, InputField} from "../../share-component";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="px-4 py-8 sm:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ورود به دریک
          </span>
        </h2>

        <InputField
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button
          type="submit"
          text="Login"
          loading={isLoading}
          className="w-full"
        />
      </form>

      <div className="flex justify-center items-center mt-8 gap-2">
        <p className="text-gray-600 text-sm sm:text-base">
          Don't have an account?
        </p>
        <Link
          to="/register"
          className="text-purple-500 hover:underline text-sm sm:text-base">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Login;
