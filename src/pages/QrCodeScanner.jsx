import React, {useState} from "react";
import QrScanner from "react-qr-scanner";

const QrCodeScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false); // Track scanning status

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text);
      setIsScanning(false); // Stop scanning after successful scan
      alert(`Scanned QR Code: ${data.text}`);
      console.log(data.text);
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

      <div className="w-full max-w-xs border-2 border-purple-500 rounded-lg overflow-hidden shadow-lg">
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          onLoad={startScanning} // Start scanning when component loads
          style={{width: "100%"}}
        />
      </div>

      {isScanning && (
        <p className="mt-4 text-blue-600 font-medium">در حال اسکن...</p>
      )}

      {scanResult && (
        <p className="mt-4 text-green-600 font-medium">نتیجه: {scanResult}</p>
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
