import Notification from "../../share-component/Notification";
import {useInput, useMessage} from "../../hooks";
import {NavLink} from "react-router";

const emailValidation = (value) => {
  return value.includes("@");
};

const passwordValidation = (value) => {
  return value.trim() !== "";
};

const Login = () => {
  const {showMessage, toastMessages, setToastMessages} = useMessage();

  const {
    value: emailValue,
    inputIsValid: emailIsValid,
    hasError: emailError,
    onBlurHandler: emailOnBlurHandler,
    onChangeHandler: emailOnChangeHandler,
    onResetHandler: emailOnResetHandler,
  } = useInput(emailValidation);

  const {
    value: passwordValue,
    inputIsValid: passwordIsValid,
    hasError: passwordError,
    onBlurHandler: passwordOnBlurHandler,
    onChangeHandler: passwordOnChangeHandler,
    onResetHandler: passwordOnResetHandler,
  } = useInput(passwordValidation);

  const formIsValid = passwordIsValid && emailIsValid;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-gradient-layer1"></div>
        <div className="absolute inset-0 animate-gradient-layer2"></div>
        <div className="absolute inset-0 animate-fluid-shapes"></div>
        <div className="absolute inset-0 animate-light-flares"></div>
      </div>

      {/* Main Form */}
      <div className="relative z-10 p-10 max-w-md w-full bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-500/20 blur-xl opacity-75 rounded-3xl"></div>

        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col items-center justify-center gap-6 z-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-800">
            <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              ورود به دریک
            </span>
          </h2>

          <div className="flex flex-col w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username">
              UserName
            </label>
            <input
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              id="username"
              type="text"
              placeholder="Username"
              value={emailValue}
              onChange={emailOnChangeHandler}
              onBlur={emailOnBlurHandler}
            />
            {emailError && (
              <div className="text-red-500 text-xs mt-1">{emailError}</div>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              id="password"
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={passwordOnChangeHandler}
              onBlur={passwordOnBlurHandler}
            />
            {passwordError && (
              <div className="text-red-500 text-xs mt-1">{passwordError}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={!formIsValid}
            className="w-full bg-gradient-to-r from-yellow-500 to-purple-500 hover:from-yellow-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300">
            Login
          </button>
        </form>

        <div className="w-full flex flex-row justify-center items-center mt-8 gap-2">
          <p className="text-gray-600">Don't have an account?</p>
          <NavLink
            to="/register"
            className="text-purple-700 font-bold hover:underline">
            Register Now
          </NavLink>
        </div>
      </div>

      {/* Artistic Animations */}
      <style jsx>{`
        /* Gradient Layers */
        @keyframes gradient-layer1 {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-layer2 {
          0% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 50% 0%;
          }
        }

        /* Fluid Organic Shapes */
        @keyframes fluid-shapes {
          0% {
            transform: translate(-10%, -10%) scale(1);
          }
          50% {
            transform: translate(110%, 110%) scale(1.5);
          }
          100% {
            transform: translate(-10%, -10%) scale(1);
          }
        }

        /* Light Flares */
        @keyframes light-flares {
          0%,
          100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        /* Fade In Animation */
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-layer1 {
          background: linear-gradient(
            270deg,
            #ff7eb3,
            #65d6ce,
            #ffaf7b,
            #c47aff
          );
          background-size: 800% 800%;
          animation: gradient-layer1 12s ease infinite;
        }

        .animate-gradient-layer2 {
          background: linear-gradient(
            360deg,
            #a855f7,
            #10b981,
            #3b82f6,
            #facc15
          );
          background-size: 600% 600%;
          animation: gradient-layer2 18s ease infinite;
          mix-blend-mode: overlay;
        }

        .animate-fluid-shapes:before {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: fluid-shapes 10s ease-in-out infinite;
          opacity: 0.5;
        }

        .animate-light-flares:before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          border-radius: 50%;
          top: 50%;
          left: 50%;
          animation: light-flares 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 2s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Login;
