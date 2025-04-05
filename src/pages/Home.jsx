import React, {useRef} from "react";
import {QRCodeCanvas} from "qrcode.react";
import BottomBar from "../features/bottombar/BottomBar";
import logo from "../assets/coin.png";
import walletImage from "../assets/wallet-filled-money-tool.png";
import clockImage from "../assets/time.png";
import plusImage from "../assets/plus.png";
import thunderImage from "../assets/thunder.png";
import {InfoItem, ActionLink, Button} from "../share-component";
import styles from "../features/sidebar/Sidebar.module.css";
import {useUserInfo} from "../contexts/userInfoContext";
import {getWalletBalance} from "../services/TransactionServices";
import {useToast} from "../contexts/toastContext";

const Home = () => {
  const qrRef = useRef(null);
  const {userInfo, setUserInfo} = useUserInfo();
  const {showToast} = useToast();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "my_qr_code.png";
      link.click();
    }
  };

  const getCurrentWalletBalanceHandler = () => {
    getWalletBalance(userInfo.id).then((response) => {
      setUserInfo((preState) => {
        return {
          ...preState,
          walletBalance: Number(response.walletBalance),
        };
      });

      showToast("کیف پول به روز رسانی شد!", "success");
    });
  };

  return (
    <div className="flex flex-col items-center justify-start py-10 min-h-[calc(100vh-60px)]">
      {/* Animated QR Code Container */}
      <div className="relative w-[234px] h-[234px] flex items-center justify-center rounded-lg p-4 overflow-hidden">
        {/* Background Layers */}
        <div className={styles.backgroundLayers}>
          <div className={styles.animateGradientLayer1}></div>
          <div className={styles.animateGradientLayer2}></div>
        </div>

        {/* QR Code */}
        <div ref={qrRef} className="relative bg-white p-2 rounded-lg">
          <QRCodeCanvas
            value={userInfo.qr_code_id}
            size={210}
            bgColor="#ffffff"
            fgColor="#6B21A8"
            level={"H"}
            includeMargin={false}
            imageSettings={{
              src: logo,
              height: 40,
              width: 40,
              excavate: true,
            }}
            style={{
              borderRadius: "15px",
              padding: "8px",
            }}
          />
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQRCode}
        className="mt-2 bg-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-purple-700 transition-all">
        دریافت رمزینه پاسخ سریع
      </button>

      {/* Wallet Info Card */}
      <div className="mt-6 bg-white border-2 border-gray-300 rounded-xl w-full sm:w-[450px] p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <InfoItem
            icon={walletImage}
            text="موجودی کیف پول"
            alt="Wallet Balance"
          />

          <img
            src={clockImage}
            alt="Clock"
            className="w-6 h-6 transition-transform transform group-hover:translate-x-1 cursor-pointer"
            onClick={getCurrentWalletBalanceHandler}
          />
        </div>

        <div className="flex justify-center items-center text-2xl font-semibold text-purple-600 mb-4">
          {Math.floor(userInfo?.walletBalance)}{" "}
          <span className="text-gray-500 text-lg mx-1">تومان</span>
        </div>

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

      <BottomBar />
    </div>
  );
};

export default Home;
