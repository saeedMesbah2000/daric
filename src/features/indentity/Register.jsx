import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router";
import {RegisterUser} from "../../services/IdentityServices";
import {Button, InputField} from "../../share-component";
import {useUserInfo} from "../../contexts/userInfoContext";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {setUserInfo} = useUserInfo();
  const {
    register,
    handleSubmit,
    formState: {errors},
    formState,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);

    RegisterUser(data).then((response) => {
      debugger;
      setUserInfo(response);
      setIsLoading(false);
      navigate("/verification");
    });
  };

  return (
    <div className="w-[300px] sm:w-[370px] px-4 py-8 flex flex-col justify-between sm:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-[350px] flex flex-col items-center gap-8 justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ساخت حساب کاربری
          </span>
        </h2>

        <InputField
          id="firstName"
          label="نام"
          type="text"
          register={register}
          errors={errors}
          validation={{
            required: "نام الزامی است!",
          }}
        />

        <InputField
          id="lastName"
          label="نام‌خانوادگی"
          type="text"
          register={register}
          errors={errors}
          validation={{
            required: "نام‌خانوادگی الزامی است!",
          }}
        />

        <InputField
          id="socialSecureNumber"
          label="کد ملی"
          type="number"
          register={register}
          errors={errors}
          validation={{
            required: "کد ملی الزامی است!",
            minLength: {value: 10, message: "کد ملی باید ۱۰ رقم باشد!"},
            maxLength: {value: 10, message: "کد ملی باید ۱۰ رقم باشد!"},
          }}
        />

        <InputField
          id="phoneNumber"
          label="شماره موبایل"
          type="number"
          register={register}
          errors={errors}
          validation={{
            required: "شماره موبایل الزامی است",
            minLength: {value: 11, message: "شماره موبایل باید ۱۱ رقم باشد!"},
            maxLength: {value: 11, message: "شماره موبایل باید ۱۱ رقم باشد!"},
          }}
        />

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
