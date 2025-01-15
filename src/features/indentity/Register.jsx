import React, {useState} from "react";
import {Link} from "react-router";
import {Button, InputField} from "../../share-component";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full md:w-[370px] px-4 py-8 flex flex-col justify-between sm:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden mx-auto">
      <form
        onSubmit={handleSubmit}
        className="h-[350px] flex flex-col items-center gap-8 justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ساخت حساب کاربری
          </span>
        </h2>

        <InputField id="userName" label="نام و نام‌خانوادگی" type="text" />

        <InputField id="userId" label="کد ملی" type="text" />

        <InputField id="phoneNumber" label="شماره موبایل" type="text" />

        <Button
          type="submit"
          text="تایید و ارسال کد"
          loading={isLoading}
          className="w-full"
        />
      </form>

      <div className="flex justify-center items-center mt-8 gap-2">
        <p className="text-gray-600 text-sm sm:text-base">اکانت داری؟</p>
        <Link
          to="/login"
          className="text-purple-500 hover:underline text-sm sm:text-base">
          برو به صفحه ورود!
        </Link>
      </div>
    </div>
  );
};

export default Register;
