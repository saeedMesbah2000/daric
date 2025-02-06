import React from "react";
import homeImage from "../../assets/home.png";
import servicesImage from "../../assets/dimensions.png";
import qrCodeScanImage from "../../assets/qr-code-scan.png";
import transactionImage from "../../assets/transaction.png";
import walletImage from "../../assets/wallet-filled-money-tool.png";
import {Link} from "react-router";

const BottomBar = () => {
  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 right-0 z-50">
      <div className="w-full md:w-[500px] bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-600 shadow-lg flex items-center justify-around py-2 rounded-t-xl">
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center justify-center cursor-pointer group">
          <img
            src={homeImage}
            alt="Home"
            className="w-[24px] h-[24px] group-hover:scale-110 transition-transform duration-300"
          />
          <p className="mt-1 text-sm font-semibold text-white group-hover:text-yellow-300">
            خانه
          </p>
        </Link>

        {/* Wallet */}
        <Link
          to="/wallet"
          className="flex flex-col items-center justify-center cursor-pointer group">
          <img
            src={walletImage}
            alt="Wallet"
            className="w-[24px] h-[24px] group-hover:scale-110 transition-transform duration-300"
          />
          <p className="mt-1 text-sm font-semibold text-white group-hover:text-yellow-300">
            کیف پول
          </p>
        </Link>

        {/* QR Code */}
        <Link
          to="/scanner"
          className="flex flex-col items-center justify-center bg-white h-[60px] w-[60px] shadow-lg rounded-full transform hover:scale-110 transition-transform duration-300 cursor-pointer">
          <img
            src={qrCodeScanImage}
            alt="Scan QR Code"
            className="w-[36px] h-[36px]"
          />
        </Link>

        {/* Transactions */}
        <Link
          to="/transactions"
          className="flex flex-col items-center justify-center cursor-pointer group">
          <img
            src={transactionImage}
            alt="Transactions"
            className="w-[24px] h-[24px] group-hover:scale-110 transition-transform duration-300"
          />
          <p className="mt-1 text-sm font-semibold text-white group-hover:text-yellow-300">
            تراکنش‌ها
          </p>
        </Link>

        {/* Services */}
        <Link
          to="/services"
          className="flex flex-col items-center justify-center cursor-pointer group">
          <img
            src={servicesImage}
            alt="Services"
            className="w-[24px] h-[24px] group-hover:scale-110 transition-transform duration-300"
          />
          <p className="mt-1 text-sm font-semibold text-white group-hover:text-yellow-300">
            خدمات
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
