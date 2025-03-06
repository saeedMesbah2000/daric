import React, {useState} from "react";
import {Button, InfoItem, InputField} from "../share-component";
import walletImage from "../assets/wallet-filled-money-tool.png";
import clockImage from "../assets/time.png";
import plusImage from "../assets/plus.png";
import thunderImage from "../assets/thunder.png";
import leftImage from "../assets/left-arrow.png";
import {useForm} from "react-hook-form";
import {useUserInfo} from "../contexts/userInfoContext";
import {useNavigate} from "react-router";
import {useToast} from "../contexts/toastContext";

const Wallet = () => {
  const [isLoading, setIsLoading] = useState();
  const {userInfo, setUserInfo} = useUserInfo();
  const navigate = useNavigate();
  const {showToast} = useToast();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setUserInfo((preState) => {
        return {
          ...preState,
          walletBalance: Number(preState?.walletBalance) + Number(data.amount),
        };
      });
      showToast("افزایش موجودی با موفقیت انجام شد!", "success");
      navigate("/home");
    }, 2000);
  };

  // Track the amount field
  const amount = watch("amount") || 0;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-start p-4 gap-6"
      style={{height: "calc(100vh - 60px)"}}>
      {/* Wallet Balance Info */}
      <div className="w-full sm:w-[400px] mt-6 flex flex-col justify-between bg-gradient-to-b from-yellow-400 to-purple-600 border-2 border-gray-200 rounded-lg h-[250px] pt-6 shadow-lg transition-transform transform hover:scale-105">
        <div className="flex justify-between items-center mb-4 px-6 text-lg">
          <InfoItem icon={walletImage} text="کیف پول" alt="Wallet Balance" />
          <img
            src={clockImage}
            alt="Clock"
            className="w-6 h-6 transition-transform transform group-hover:translate-x-1"
          />
        </div>

        <div className="w-full bg-white border-2 flex flex-col justify-center items-center text-2xl font-semibold text-purple-700 rounded-b-lg shadow-md">
          <p className="w-full text-sm text-gray-600">موجودی:</p>
          <div className="mb-2 text-2xl font-bold text-purple-800">
            {userInfo?.walletBalance}{" "}
            <span className="text-gray-500 text-lg mx-1">تومان</span>
          </div>
        </div>
      </div>

      {/* Auto-Recharge Activation */}
      <div className="w-full sm:w-[400px] flex justify-between items-center border-2 shadow-lg px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
        <img
          src={thunderImage}
          alt="Automatic Charge Activation"
          className="bg-purple-500 border-2 h-10 w-10 rounded-full p-1 shadow-lg"
        />

        <div className="w-full mr-1">
          <p className="text-xl font-semibold">فعال سازی خودکار شارژ</p>
          <p className="text-sm text-gray-500 pt-1">همیشه موجودی داشته باش!</p>
        </div>

        <img src={leftImage} alt="Left Arrow" className="h-6 w-6" />
      </div>

      <div className="w-full sm:w-[400px] h-1 bg-gray-300 rounded-lg" />

      {/* Recharge Input */}
      <div className="w-full sm:w-[400px] flex flex-col items-center gap-4">
        <div className="my-2 text-2xl flex justify-between items-center gap-4">
          <div className="w-[200px]">
            <InputField
              id="amount"
              register={register}
              errors={errors}
              label="مبلغ مورد نظر:"
              type="number"
              defaultValue={amount}
              validation={{
                required: "مبلغ الزامی است!",
                min: {value: 1000, message: "حداقل مبلغ ۱۰۰۰ تومان است!"},
                max: {
                  value: 1000000,
                  message: "حداکثر مبلغ ۱,۰۰۰,۰۰۰ تومان است!",
                },
              }}
            />
          </div>
          <span className="text-gray-500 text-lg mx-1">تومان</span>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          {[
            {label: "۵۰,۰۰۰", value: 50000},
            {label: "۷۰,۰۰۰", value: 70000},
            {label: "۱۰۰,۰۰۰", value: 100000},
          ].map((item) => (
            <div
              key={item.label}
              className="border-2 border-purple-600 hover:bg-purple-100 py-2 px-4 rounded-lg text-lg cursor-pointer transition duration-300"
              onClick={() => setValue("amount", item.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && setValue("amount", item.value)
              }
              aria-label={`Set amount to ${item.label} تومان`}>
              {item.label}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <Button
          text={"افزایش موجودی"}
          type="submit"
          className="mt-4"
          loading={isLoading}
        />
      </div>
    </form>
  );
};

export default Wallet;
