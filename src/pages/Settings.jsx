import React from "react";
import {Button} from "../share-component";

const Settings = () => {
  const settingsOptions = [
    "امنیت",
    "شخصی سازی",
    "اطلاع رسانی",
    "اپلیکشن",
    "احراز هویت",
    "تنظیمات زبان",
  ];

  return (
    <div
      className="relative flex flex-col items-center bg-gradient-to-b from-purple-100 via-transparent to-transparent py-10 px-6"
      style={{height: "calc(100vh - 70px)"}}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">تنظیمات</h1>
        <p className="text-gray-600 text-base max-w-md mx-auto mt-2">
          گزینه‌های زیر را برای مدیریت تنظیمات مختلف اپلیکیشن انتخاب کنید.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {settingsOptions.map((option, index) => (
          <Button
            key={index}
            text={option}
            className="flex justify-center items-center py-4 px-6 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-all transform hover:scale-105"
          />
        ))}
      </div>

      {/* Transparent Overlay */}
    </div>
  );
};

export default Settings;
