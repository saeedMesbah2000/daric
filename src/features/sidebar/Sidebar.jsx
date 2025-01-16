import React from "react";
import {Link} from "react-router";
import {Button} from "../../share-component";
import styles from "./Sidebar.module.css";
import closeImage from "../../assets/closeColored.png";
import accountImage from "../../assets/account.png";

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <div
      className={`${styles.sidebar}`}
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-100%)", // Ensures sidebar moves correctly
      }}>
      {/* Background Layers */}
      <div className={styles.backgroundLayers}>
        <div className={styles.animateGradientLayer1}></div>
        <div className={styles.animateGradientLayer2}></div>
      </div>

      {/* Sidebar Content */}
      <div className="w-full flex flex-row justify-between items-center px-6 mb-8">
        <h2 className="text-2xl font-bold text-white">پنل مدیریت</h2>

        <div className="flex items-center justify-center">
          <img
            onClick={toggleSidebar}
            src={closeImage}
            alt="Open sidebar"
            className="w-[45px] h-[45px] cursor-pointer"
          />
        </div>
      </div>

      <nav className="flex flex-col gap-4 w-full px-6">
        <div className={`${styles.navItem}`}>
          <div className="flex flex-row items-center justify-between border-b-2 pb-2">
            <div className="flex flex-col items-center gap-2 text-black">
              <p className="text-lg">سعید مصباح</p>
              <p>۰۹۱۲۹۶۳۰۹۷۳</p>
            </div>

            <div className="flex items-center justify-center">
              <img
                onClick={toggleSidebar}
                src={accountImage}
                alt="Open sidebar"
                className="w-[45px] h-[45px]"
              />
            </div>
          </div>

          <div className="mt-2">
            <p className="text-start text-black">سطح احراز</p>
            <div className="w-full flex flex-row items-center gap-1 mt-2">
              <div className="w-full h-[15px] border-black border-2 bg-yellow-500"></div>
              <div className="w-full h-[15px] border-black border-2 bg-yellow-500"></div>
              <div className="w-full h-[15px] border-black border-2 bg-white"></div>
            </div>
          </div>
        </div>

        <Link to="/profile" className={styles.navItem} onClick={toggleSidebar}>
          پروفایل
        </Link>

        <Link to="/settings" className={styles.navItem} onClick={toggleSidebar}>
          تنظیمات
        </Link>

        <Link to="/support" className={styles.navItem} onClick={toggleSidebar}>
          پشتیبانی
        </Link>

        <Link to="/rules" className={styles.navItem} onClick={toggleSidebar}>
          قوانین و مقررات
        </Link>

        <Link to="/aboutUs" className={styles.navItem} onClick={toggleSidebar}>
          درباره ما
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <Link to="/login" className={styles.logoutButton}>
          خروج
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
