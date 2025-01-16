import React from "react";
import {Link} from "react-router";
import styles from "./Sidebar.module.css";

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
      <h2 className="text-2xl font-bold mb-8 text-white">پنل مدیریت</h2>

      <nav className="flex flex-col gap-4 w-full px-6">
        <Link to="/dashboard" className={styles.navItem}>
          داشبورد
        </Link>
        <Link to="/profile" className={styles.navItem}>
          پروفایل
        </Link>
        <Link to="/settings" className={styles.navItem}>
          تنظیمات
        </Link>
        <Link to="/help" className={styles.navItem}>
          راهنما
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          className={styles.logoutButton}
          aria-label="Logout"
          onClick={toggleSidebar}>
          خروج
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
