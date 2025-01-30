import React, {useEffect, useState, useRef} from "react";
import {QRCodeCanvas} from "qrcode.react";
import BottomBar from "../features/bottombar/BottomBar";
import logo from "../assets/coin.png";
import downloadImage from "../assets/download.png";
import walletImage from "../assets/wallet-filled-money-tool.png";
import clockImage from "../assets/time.png";
import plusImage from "../assets/plus.png";
import thunderImage from "../assets/thunder.png";
import {InfoItem, ActionLink, Button} from "../share-component";
import styles from "../features/sidebar/Sidebar.module.css";

const Home = () => {
  const [userId, setUserId] = useState(null);
  const qrRef = useRef(null);

  // Simulate API call to fetch user ID
  useEffect(() => {
    const fetchUserId = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({userId: "123456789"}), 1000)
      );
      setUserId(response.userId);
    };

    fetchUserId();
  }, []);

  // Function to download QR Code as PNG
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "my_qr_code.png";
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-start py-10 min-h-[calc(100vh-60px)]">
      {/* Animated QR Code Container */}
      <div className="relative w-[233px] h-[232px] flex items-center justify-center rounded-xl p-4 overflow-hidden">
        {/* Background Layers */}
        <div className={styles.backgroundLayers}>
          <div className={styles.animateGradientLayer1}></div>
          <div className={styles.animateGradientLayer2}></div>
        </div>

        {/* QR Code */}
        <div ref={qrRef} className="relative bg-white p-2 rounded-xl">
          {userId ? (
            <QRCodeCanvas
              value={userId}
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
          ) : (
            <p className="text-gray-500 animate-pulse">در حال بارگذاری...</p>
          )}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQRCode}
        className="mt-2 bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all">
        دانلود رمزینه پاسخ سریع
      </button>

      {/* Wallet Info Card */}
      <div className="mt-6 bg-white border-2 border-gray-300 rounded-lg w-full sm:w-[450px] p-6 shadow-lg">
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

        <div className="flex justify-center items-center text-2xl font-semibold text-purple-600 mb-4">
          {"۴۵۰۰۰"} <span className="text-gray-500 text-lg mx-1">تومان</span>
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
