import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router";
import {Button, InputField} from "../../share-component";
import {useAuth} from "../../contexts/authContext";

const Verification = () => {
  const [isLoading, setIsLoading] = useState();
  const {state} = useLocation();
  const navigate = useNavigate();
  const {login} = useAuth();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (data.verificationCode === "123456") {
        login();
        navigate("/home");
      }
    }, 2000);
  };

  console.log(state);

  return (
    <div className="w-full md:w-[370px] px-4 py-8 sm:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[350px] flex flex-col gap-6 justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ورود به دریک
          </span>
        </h2>

        <div>
          <InputField
            id="verificationCode"
            register={register}
            errors={errors}
            label="کد تایید"
            type="number"
            validation={{
              required: "شماره تماس الزامی است!",
              minLength: {value: 6, message: "کد تايید باید ۶ رقم باشد!"},
              maxLength: {value: 6, message: "کد تايید باید ۶ رقم باشد!"},
            }}
          />

          <p className="mt-8">
            کد به شماره{" "}
            <span className="text-purple-500 hover:underline text-sm sm:text-base">
              {state}
            </span>{" "}
            ارسال شد.
          </p>
        </div>

        <Button
          type="submit"
          text="تایید صحت"
          loading={isLoading}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default Verification;
