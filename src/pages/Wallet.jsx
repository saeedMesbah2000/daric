import React from "react";
import {Button, InfoItem} from "../share-component";
import walletImage from "../assets/wallet-filled-money-tool.png";
import clockImage from "../assets/time.png";
import plusImage from "../assets/plus.png";
import thunderImage from "../assets/thunder.png";
import leftImage from "../assets/left-arrow.png";
import {useState} from "react";

const Wallet = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div
      className="flex flex-col items-center justify-start py-4 gap-6"
      style={{height: "calc(100vh - 60px)"}}>
      {/* Wallet Balance Info */}
      <div className="mt-6 flex flex-col justify-between bg-gradient-to-b from-yellow-500 to-purple-500 border-2 border-gray-300 rounded-lg w-[400px] h-[250px] pt-6 shadow-lg">
        <div className="flex justify-between items-center mb-4 px-6 text-lg">
          <InfoItem icon={walletImage} text="کیف پول" alt="Wallet Balance" />
          <img
            src={clockImage}
            alt="Clock"
            className="w-6 h-6 transition-transform transform group-hover:translate-x-1"
          />
        </div>

        <div className="w-full bg-white border-2 flex flex-col justify-center items-center text-2xl font-semibold text-purple-600 rounded-b-lg">
          <p className="w-full text-sm text-black">موجودی:</p>
          <div className="mb-2">
            {"۴۵۰۰۰"} <span className="text-gray-500 text-lg mx-1">تومان</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-2 w-[400px] shadow-lg px-2 py-1 rounded-lg cursor-pointer">
        <img
          src={thunderImage}
          alt="thunder"
          className="bg-purple-500 border-2 h-10 w-10 rounded-full p-1"
        />

        <div className="w-full mr-1">
          <p className="text-xl">فعال سازی خودکار شارژ</p>
          <p className="text-sm text-gray-400 pt-1">همیشه موجودی داشته باش!</p>
        </div>

        <img src={leftImage} alt="leftArrow" className="h-6 w-6" />
      </div>

      <div className="w-[400px] h-1 bg-gray-300 rounded-lg" />

      <div className="w-[400px] flex flex-col items-center gap-4">
        <p className="text-lg">مبلغ مورد نظر:</p>

        <div className="mb-2">
          <span className="text-lg">{amount}</span>{" "}
          <span className="text-gray-500 text-lg mx-1">تومان</span>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <div
            className="border-2 border-black py-1 px-4 rounded-lg text-lg"
            onClick={() => setAmount("۵۰۰,۰۰")}>
            ۵۰,۰۰۰
          </div>

          <div
            className="border-2 border-black py-1 px-4 rounded-lg text-lg"
            onClick={() => setAmount("۷۰,۰۰۰")}>
            ۷۰,۰۰۰
          </div>

          <div
            className="border-2 border-black py-1 px-4 rounded-lg text-lg"
            onClick={() => setAmount("۱۰۰,۰۰۰")}>
            ۱۰۰,۰۰۰
          </div>
        </div>

        <Button text={"افزایش موجودی"} />
      </div>
    </div>
  );
};

export default Wallet;
