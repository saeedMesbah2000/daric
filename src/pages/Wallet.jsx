import React from "react";
import {Button, InfoItem} from "../share-component";
import walletImage from "../assets/wallet-filled-money-tool.png";
import clockImage from "../assets/time.png";
import plusImage from "../assets/plus.png";
import thunderImage from "../assets/thunder.png"; // Use SVG for modern look
import leftImage from "../assets/left-arrow.png"; // Use SVG for modern look
import {useState} from "react";

const Wallet = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div
      className="flex flex-col items-center justify-start py-4 gap-6"
      style={{height: "calc(100vh - 60px)"}}>
      {/* Wallet Balance Info */}
      <div className="mt-6 flex flex-col justify-between bg-gradient-to-b from-yellow-400 to-purple-600 border-2 border-gray-200 rounded-lg w-[400px] h-[250px] pt-6 shadow-lg transition-transform transform hover:scale-105">
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
          <div className="mb-2 text-3xl font-bold text-purple-800">
            {"۴۵۰۰۰"} <span className="text-gray-500 text-lg mx-1">تومان</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-2 w-[400px] shadow-lg px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
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

      <div className="w-[400px] h-1 bg-gray-300 rounded-lg" />

      <div className="w-[400px] flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">مبلغ مورد نظر:</p>

        <div className="mb-2 text-2xl">
          <span className="text-lg">{amount}</span>{" "}
          <span className="text-gray-500 text-lg mx-1">تومان</span>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          {["۵۰,۰۰۰", "۷۰,۰۰۰", "۱۰۰,۰۰۰"].map((value) => (
            <div
              key={value}
              className="border-2 border-purple-600 hover:bg-purple-100 py-2 px-4 rounded-lg text-lg cursor-pointer transition duration-300"
              onClick={() => setAmount(value)}
              role="button"
              tabIndex={0} // Accessibility: make it focusable
              onKeyDown={(e) => e.key === "Enter" && setAmount(value)} // Accessibility: handle keyboard interaction
              aria-label={`Set amount to ${value} تومان`}>
              {value}
            </div>
          ))}
        </div>

        <Button text={"افزایش موجودی"} className="mt-4" />
      </div>
    </div>
  );
};

export default Wallet;
