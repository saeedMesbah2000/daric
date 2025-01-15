import React, {useState} from "react";
import {Link} from "react-router";
import {Button, InputField} from "../../share-component";

const Verification = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full md:w-[350px] px-4 py-8 sm:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden mx-auto">
      <form
        onSubmit={handleSubmit}
        className="h-[350px] flex flex-col items-center gap-8 justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ورود به دریک
          </span>
        </h2>

        <InputField id="username" label="Username" type="text" />

        <InputField id="password" label="Password" type="password" />

        <Button
          type="submit"
          text="تایید و ارسال کد"
          loading={isLoading}
          className="w-full"
        />
      </form>

      <div className="flex justify-center items-center mt-8 gap-2">
        <p className="text-gray-600 text-sm sm:text-base">اکانت نداری؟ </p>
        <Link
          to="/register"
          className="text-purple-500 hover:underline text-sm sm:text-base">
          الان بساز
        </Link>
      </div>
    </div>
  );
};

export default Verification;
