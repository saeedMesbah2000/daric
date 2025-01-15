import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router";
import {Button, InputField} from "../../share-component";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log("Form Data Submitted:", data); // Log the data
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Form Submitted! Check the console for the data.");
      console.log("Final Data:", data); // Log again after submission
    }, 2000);
  };

  return (
    <div className="w-full md:w-[370px] mx-auto px-6 py-8 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[350px] flex flex-col gap-6 justify-between">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ورود به دریک
          </span>
        </h2>

        <InputField
          id="phoneNumber"
          register={register}
          errors={errors}
          label="شماره تماس"
          type="text"
          validation={{
            required: "شماره تماس الزامی است",
            minLength: {value: 11, message: "شماره باید ۱۱ رقم باشد"},
            maxLength: {value: 11, message: "شماره باید ۱۱ رقم باشد"},
          }}
        />

        <Button
          type="submit"
          text="تایید و ارسال کد"
          loading={isLoading}
          className="w-full"
        />
      </form>

      <div className="flex justify-center items-center mt-6 gap-2">
        <p className="text-gray-600">اکانت نداری؟</p>
        <Link to="/register" className="text-purple-500 hover:underline">
          الان بساز
        </Link>
      </div>
    </div>
  );
};

export default Login;
