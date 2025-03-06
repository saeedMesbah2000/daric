import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {Button, InputField} from "../share-component";
import {useForm} from "react-hook-form";
import {useUserInfo} from "../contexts/userInfoContext";
import {useToast} from "../contexts/toastContext";
import {doTransaction} from "../services/TransactionServices";

const DoTransaction = () => {
  const location = useLocation();
  const qrData = location.state?.qrData || "No Data"; // Retrieve passed data
  const {userInfo, setUserInfo} = useUserInfo();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const {showToast} = useToast();

  console.log(qrData);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    doTransaction({
      sender_id: userInfo.id,
      receiver_id: qrData.id,
      amount: data.amount,
    }).then((response) => {
      setUserInfo((preState) => {
        return {
          ...preState,
          walletBalance: Number(preState?.walletBalance) - Number(data.amount),
        };
      });
      showToast("افزایش موجودی با موفقیت انجام شد!", "success");
      navigate("/home");
    });
  };

  // Track the amount field
  const amount = watch("amount") || 0;

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-67px)] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          تایید پرداخت نهایی
        </h1>

        {/* Wallet Balance Display */}
        <div className="bg-purple-100 text-purple-800 text-center py-3 px-6 rounded-lg mb-6">
          موجودی کیف پول شما:{" "}
          <span className="font-bold">{userInfo.walletBalance} تومان</span>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Amount Input */}
          <div className="flex flex-col mt-16">
            <InputField
              id="amount"
              register={register}
              errors={errors}
              label="مبلغ مورد نظر را وارد کنید:"
              type="number"
              defaultValue={amount}
              className="w-full"
              validation={{
                required: "مبلغ الزامی است!",
                min: {value: 0, message: "حداقل مبلغ ۰ تومان است!"},
                max: {
                  value: userInfo.walletBalance,
                  message: `حداکثر مبلغ ${userInfo.walletBalance} تومان است!`,
                },
              }}
            />
          </div>

          {/* Receiver Display */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-2">گیرنده:</label>

            <InputField
              id="recipient"
              register={register}
              errors={errors}
              label={qrData.firstName + " " + qrData.lastName}
              type="text"
              disabled={true}
              className="w-full bg-gray-200"
            />
          </div>

          {/* Submit Button */}
          <Button
            loading={isLoading}
            text="پرداخت"
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:shadow-lg transition-all text-white py-3 rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default DoTransaction;
