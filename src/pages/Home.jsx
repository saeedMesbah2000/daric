import React from "react";
import {Link} from "react-router";
import BottomBar from "../features/bottombar/BottomBar";
import qrImage from "../assets/QR_Code_Example.svg.png";
import walletImage from "../assets/wallet-filled-money-tool.png";
import clockImage from "../assets/time.png";
import plusImage from "../assets/plus.png";
import thunderImage from "../assets/thunder.png";
import {InfoItem, ActionLink} from "../share-component";

const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-start  py-10"
      style={{height: "calc(100vh - 60px)"}}>
      {/* QR Code */}
      <img
        src={qrImage}
        alt="QR Code"
        className="w-56 h-56 cursor-pointer shadow-md rounded-lg"
      />

      {/* Wallet Info Card */}
      <div className="mt-16 bg-white border-2 border-gray-300 rounded-lg w-[450px] p-6 shadow-lg">
        {/* Wallet Balance Info */}
        <div className="flex justify-between items-center mb-4">
          <InfoItem
            icon={walletImage}
            text="موجودی کیف پول"
            alt="Wallet Balance"
          />
          <img
            src={clockImage}
            alt="Clock"
            className="w-6 h-6 transition-transform transform group-hover:translate-x-1"
          />
        </div>

        {/* Wallet Balance */}
        <div className="flex justify-center items-center text-2xl font-semibold text-purple-600 mb-4">
          {"۴۵۰۰۰"} <span className="text-gray-500 text-lg mx-1">تومان</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <ActionLink
            to="/wallet"
            icon={plusImage}
            text="شارژ حساب"
            alt="Add Balance"
          />
          <ActionLink
            to="/wallet"
            icon={thunderImage}
            text="شارژ سریع"
            alt="Quick Charge"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
};

export default Home;
