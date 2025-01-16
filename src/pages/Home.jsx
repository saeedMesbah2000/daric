import React from "react";
import BottomBar from "../features/bottombar/BottomBar";
import walletImage from "../assets/wallet-filled-money-tool.png";
import qrImage from "../assets/QR_Code_Example.svg.png";
import clockImage from "../assets/time.png";

const Home = () => {
  return (
    <div
      style={{height: "calc(100vh - 60px)"}}
      className="relative flex flex-col items-center justify-start pt-32">
      <img
        src={qrImage}
        alt="Open sidebar"
        className="w-[230px] h-[230px] cursor-pointer"
      />

      <div className="mt-24 border-2 border-black rounded-md w-[400px] h-[100px] text-center px-8 py-2">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <img
              src={walletImage}
              alt="Navigate to Home"
              className="w-[24px] h-[24px] transition-transform transform group-hover:translate-x-1"
            />

            <p>موجودی کیف پول</p>
          </div>

          <img
            src={clockImage}
            alt="Navigate to Home"
            className="w-[24px] h-[24px] transition-transform transform group-hover:translate-x-1"
          />
        </div>

        <div></div>

        <div></div>
      </div>

      <BottomBar />
    </div>
  );
};

export default Home;
