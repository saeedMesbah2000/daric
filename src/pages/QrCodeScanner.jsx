import React, {useState} from "react";
import QrScanner from "react-qr-scanner";
import {useNavigate} from "react-router";
import styles from "../features/sidebar/Sidebar.module.css";

const QrCodeScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text);
      setIsScanning(false);

      navigate("/doTransaction", {state: {qrData: data.text}});
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
    setIsScanning(false);
  };

  const startScanning = () => {
    setScanResult(null);
    setIsScanning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">اسکنر QR کد</h1>

      <div className="relative w-full m-1 sm:m-0 sm:w-[400px] p-1 flex items-center justify-center rounded-lg overflow-hidden">
        {/* Background Layers */}
        <div className={styles.backgroundLayers}>
          <div className={styles.animateGradientLayer1}></div>
          <div className={styles.animateGradientLayer2}></div>
        </div>

        {/* QR Code */}
        <div className="relative bg-white p-2 rounded-lg sm:m-0 sm:w-[400px]">
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            onLoad={startScanning}
            style={{width: "100%"}}
          />
        </div>
      </div>

      {isScanning && (
        <p className="mt-4 text-blue-600 font-medium">در حال اسکن...</p>
      )}

      <button
        onClick={startScanning}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
        اسکن مجدد
      </button>
    </div>
  );
};

export default QrCodeScanner;
