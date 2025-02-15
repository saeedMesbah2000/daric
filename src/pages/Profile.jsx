import React from "react";
import {useForm} from "react-hook-form";
import accountImage from "../assets/account.png";
import {Button, InputField} from "../share-component";
import {useUserInfo} from "../contexts/userInfoContext";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {userInfo} = useUserInfo();

  const onSubmitHandler = (event) => {
    console.log(event);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col items-center px-4 py-4 bg-gray-50"
      style={{height: "calc(100vh - 70px)"}}>
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={accountImage}
          alt="Account"
          className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg mb-4"
        />
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          پروفایل کاربری
        </h1>
        <p className="text-gray-500 text-sm">اطلاعات تکمیلی خود را وارد کنید</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-6 pt-10 pb-6 mt-4 flex flex-col gap-8">
        {/* User Name */}
        <InputField
          id="firstName"
          label="نام"
          type="text"
          register={register}
          errors={errors}
          value={userInfo?.firstName}
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
          value={userInfo?.lastName}
          validation={{
            required: "نام‌خانوادگی الزامی است!",
          }}
        />

        {/* National ID */}
        <InputField
          id="socialSecureNumber"
          label="کد ملی"
          type="number"
          register={register}
          errors={errors}
          value={userInfo?.socialSecureNumber}
          validation={{
            required: "کد ملی الزامی است!",
            minLength: {value: 10, message: "کد ملی باید ۱۰ رقم باشد!"},
            maxLength: {value: 10, message: "کد ملی باید ۱۰ رقم باشد!"},
          }}
        />

        {/* Phone Number */}
        <InputField
          id="phoneNumber"
          label="شماره موبایل"
          type="number"
          register={register}
          errors={errors}
          value={userInfo?.phoneNumber}
          validation={{
            required: "شماره موبایل الزامی است",
            minLength: {value: 11, message: "شماره موبایل باید ۱۱ رقم باشد!"},
            maxLength: {value: 11, message: "شماره موبایل باید ۱۱ رقم باشد!"},
          }}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        text="ذخیره"
        className="w-full max-w-md mt-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
      />
    </form>
  );
};

export default Profile;
