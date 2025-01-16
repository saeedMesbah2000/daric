import React from "react";
import homeImage from "../../assets/home.png";
import servicesImage from "../../assets/dimensions.png";
import qrCodeScanImage from "../../assets/qr-code-scan.png";
import transactionImage from "../../assets/transaction.png";
import walletImage from "../../assets/wallet-filled-money-tool.png";

const BottomBar = () => {
  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 right-0 z-50">
      <div className="w-full md:w-[500px]  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 shadow-lg flex flex-row items-center justify-around py-4 rounded-t-lg">
        {/* Home */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <img src={homeImage} alt="Home" className="w-[24px] h-[24px]" />
          <p className="mt-1 text-sm font-semibold">خانه</p>
        </div>

        {/* Wallet */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <img src={walletImage} alt="Wallet" className="w-[24px] h-[24px]" />
          <p className="mt-1 text-sm font-semibold">کیف پول</p>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center rounded-full bg-white h-[60px] w-[60px] shadow-md transform hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={qrCodeScanImage}
            alt="Scan QR Code"
            className="w-[40px] h-[40px]"
          />
        </div>

        {/* Transactions */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <img
            src={transactionImage}
            alt="Transactions"
            className="w-[24px] h-[24px]"
          />
          <p className="mt-1 text-sm font-semibold">تراکنش‌ها</p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <img
            src={servicesImage}
            alt="Services"
            className="w-[24px] h-[24px]"
          />
          <p className="mt-1 text-sm font-semibold">خدمات</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
