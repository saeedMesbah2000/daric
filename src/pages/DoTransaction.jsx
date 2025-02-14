import React from "react";
import {useLocation} from "react-router";

const DoTransaction = () => {
  const location = useLocation();
  const qrData = location.state?.qrData || "No Data"; // Retrieve passed data

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">انجام تراکنش</h1>
      <p className="text-lg text-gray-600">داده اسکن شده:</p>
      <div className="bg-gray-100 p-4 rounded-lg mt-2 text-lg font-semibold text-purple-700">
        {qrData}
      </div>
    </div>
  );
};

export default DoTransaction;
