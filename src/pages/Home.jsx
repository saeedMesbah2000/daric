import React from "react";
import BottomBar from "../features/bottombar/BottomBar";
import walletImage from "../assets/wallet-filled-money-tool.png";
import qrImage from "../assets/QR_Code_Example.svg.png";
import clockImage from "../assets/time.png";

// Reusable Component for Info Item
const InfoItem = ({icon, text, alt}) => (
  <div className="flex flex-row gap-2 items-center">
    <img
      src={icon}
      alt={alt}
      className="w-[24px] h-[24px] transition-transform transform group-hover:translate-x-1"
    />
    <p>{text}</p>
  </div>
);

// Home Component
const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-start pt-32"
      style={{height: "calc(100vh - 60px)"}}>
      {/* QR Image */}
      <img
        src={qrImage}
        alt="QR Code"
        className="w-[230px] h-[230px] cursor-pointer"
      />

      {/* Wallet Info Card */}
      <div className="mt-24 border-2 border-black rounded-md w-[400px] h-[100px] text-center px-8 py-2">
        <div className="w-full flex justify-between items-center">
          <InfoItem
            icon={walletImage}
            text="موجودی کیف پول"
            alt="Wallet Balance"
          />
          <img
            src={clockImage}
            alt="Clock"
            className="w-[24px] h-[24px] transition-transform transform group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
};

export default Home;
