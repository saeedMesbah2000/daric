import React from "react";
import {Button} from "../share-component";

const Support = () => {
  const settingsOptions = ["تماس مستقیم", "پیگیری", "چت"];

  return (
    <div
      className="relative flex flex-col items-center bg-gradient-to-b from-purple-100 via-transparent to-transparent py-10 px-6"
      style={{height: "calc(100vh - 70px)"}}>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          پشتیبانی
        </h1>
        <p className="text-gray-600 text-lg max-w-lg mx-auto">
          در این بخش می‌توانید از راه‌های زیر برای برقراری ارتباط یا دریافت
          پشتیبانی استفاده کنید.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {settingsOptions.map((option, index) => (
          <Button
            key={index}
            text={option}
            className="flex justify-center items-center py-4 px-6 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg transition-all transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Support;
