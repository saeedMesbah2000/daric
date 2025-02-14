import React, {useState} from "react";
import {Link, Outlet, useParams} from "react-router";
import Sidebar from "../../features/sidebar/Sidebar";
import {Button} from "../../share-component";
import styles from "./MainLayout.module.css";
import openImage from "../../assets/more.png";
import dangerImage from "../../assets/danger.png";
import arrowImage from "../../assets/right-arrow.png";

const name = {
  home: "خانه",
  profile: "حساب کاربری",
  settings: "تنظیمات",
  support: "پشتیبانی",
  rules: "قوانین و مقررات",
  aboutUs: "درباره ما",
  transactions: "تراکنش ها",
  services: "خدمات بیشتر",
  wallet: "کیف پول",
  scanner: "اسکن رمزینه پاسخ سریع",
  doTransaction: "انجام تراکنش",
};

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const {routeName} = useParams();

  const toggleSidebar = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Fluid Shapes Background Animation */}
      <div className={styles.animateFluidShapes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Navbar */}
        <div className="bg-white shadow-lg py-4 px-6 flex justify-between items-center rounded-b-xl">
          {routeName === "home" ? (
            <img
              onClick={toggleSidebar}
              src={openImage}
              alt="Open sidebar"
              className="w-[20px] h-[20px] cursor-pointer"
            />
          ) : (
            <Link
              to="/home"
              className="relative bg-purple-500 rounded-full p-2 flex items-center justify-center shadow-md transition-transform transform hover:scale-105 group">
              <img
                src={arrowImage}
                alt="Navigate to Home"
                className="w-[18px] h-[18px] transition-transform transform group-hover:translate-x-1"
              />
            </Link>
          )}

          <h1 className="text-xl font-bold text-gray-800">
            {routeName !== "home" ? (
              name[routeName]
            ) : (
              <img
                src={dangerImage}
                alt="Open sidebar"
                className="w-[26px] h-[26px]"
              />
            )}
          </h1>
        </div>

        {/* Outlet for Pages */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
