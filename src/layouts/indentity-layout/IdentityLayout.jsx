import React from "react";
import {Outlet} from "react-router";
import styles from "./IdentityLayout.module.css";

const IdentityLayout = ({children}) => {
  return (
    <div className={styles.identityLayout}>
      {/* Background Layers */}
      <div className={styles.backgroundLayers}>
        <div className={styles.animateGradientLayer1}></div>
        <div className={styles.animateGradientLayer2}></div>
        <div className={styles.animateFluidShapes}>
          {/* Add multiple glowing shapes */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.animateLightFlares}>
          {/* Add light flares */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>{children || <Outlet />}</div>
    </div>
  );
};

export default IdentityLayout;
