import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {InputField, Button} from "../share-component";
import incomeImage from "../assets/add.png";
import outcomeImage from "../assets/delete.png";
import useCalendar from "../hooks/useCalendar";
import {useUserInfo} from "../contexts/userInfoContext";
import {getTransactionHistory} from "../services/TransactionServices";

const Transactions = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {gregorianToJalali} = useCalendar();
  const {userInfo} = useUserInfo();
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const onSubmitHandler = (event) => {
    setIsLoading(true);

    getTransactionHistory({
      userId: userInfo.id,
      startDate: event?.startDate,
      endDate: event?.endDate,
    }).then((response) => {
      setTransactions(response);
      setIsLoading(false);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="w-full flex justify-center px-4 sm:px-6 lg:px-8"
      style={{height: "calc(100vh - 60px)"}}>
      <div className="w-full max-w-md flex flex-col items-center gap-2 mt-6 bg-white shadow-xl rounded-lg p-6">
        {/* Transaction Filters */}
        <div className="w-full grid grid-cols-1 gap-8">
          <InputField
            id="transactionType"
            label="نوع تراکنش"
            type="select"
            register={register}
            errors={errors}
            validation={{required: "نوع تراکنش الزامی است!"}}
            options={[
              {value: "all", label: "همه"},
              {value: "income", label: "واریز"},
              {value: "outcome", label: "برداشت"},
            ]}
          />

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
            <InputField
              id="startDate"
              label="از تاریخ"
              type="date"
              register={register}
              errors={errors}
              validation={{required: "تاریخ الزامی است!"}}
            />

            <InputField
              id="endDate"
              label="تا تاریخ"
              type="date"
              register={register}
              errors={errors}
              validation={{required: "تاریخ الزامی است!"}}
            />
          </div>
        </div>

        {/* Filter Button */}
        <Button
          type="submit"
          text="اعمال فیلتر"
          className="mt-4 bg-purple-600 text-white hover:bg-purple-700 transition"
          loading={isLoading}
        />

        <div className="w-full h-1 bg-gray-300 rounded-lg my-6" />

        {/* Transactions List */}
        <div className="w-full flex flex-col gap-4 overflow-y-auto ">
          {transactions.map((item, index) => {
            // const jalaliDate = gregorianToJalali(
            //   item.date.getFullYear(),
            //   item.date.getMonth() + 1,
            //   item.date.getDate()
            // );

            return (
              <div
                key={index}
                className={`w-full flex justify-between items-center border-2 px-4 py-2 rounded-lg shadow-lg transition-all ${
                  item.transaction_type === "Received"
                    ? "border-green-500 bg-green-50 hover:bg-green-100"
                    : "border-red-500 bg-red-50 hover:bg-red-100"
                }`}>
                <div className="flex items-center gap-3">
                  <img
                    src={
                      item.transaction_type === "Received"
                        ? incomeImage
                        : outcomeImage
                    }
                    alt={
                      item.transaction_type === "Received"
                        ? "Income"
                        : "Outcome"
                    }
                    className="w-10 h-10 rounded-full border-2 p-2 shadow-lg"
                  />
                  <p className="text-lg font-medium text-gray-800">
                    {item.transaction_type === "Received" ? "واریز" : "برداشت"}
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center text-center">
                  {/* <p className="text-sm text-gray-600">
                    {`${jalaliDate.year}/${jalaliDate.month}/${jalaliDate.day}`}
                  </p> */}
                  <p className="font-semibold text-xl">
                    <span
                      className={`${
                        item.transaction_type === "Received"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}>
                      {item.amount}
                    </span>{" "}
                    تومان
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default Transactions;
