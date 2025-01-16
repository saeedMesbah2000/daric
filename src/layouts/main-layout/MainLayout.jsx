import React, {useState} from "react";
import {Outlet} from "react-router";
import Sidebar from "../../features/sidebar/Sidebar";
import {Button} from "../../share-component";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

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
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          {/* Button to toggle Sidebar */}
          <Button onClick={toggleSidebar} text={open ? "Close" : "Open"} />
          <h1 className="text-xl font-bold text-gray-800">Navbar</h1>
        </div>

        {/* Outlet for Pages */}
        <div className="p-6 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
