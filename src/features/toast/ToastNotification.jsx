import React, {useEffect, useState} from "react";
import {useToast} from "../../contexts/toastContext";
import styles from "./ToastNotification.module.css"; // Import CSS Module

const ToastNotification = () => {
  const {toast} = useToast();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (toast.isOpen) {
      setFadeOut(false);

      setTimeout(() => {
        setFadeOut(true);
      }, 2500); // Start fade-out before hiding
    }
  }, [toast.isOpen]);

  const getTypeClass = () => {
    switch (toast.type) {
      case "success":
        return styles.success;
      case "error":
        return styles.error;
      case "info":
      default:
        return styles.info;
    }
  };

  return (
    toast.isOpen && (
      <div
        className={`${styles.toastContainer} ${getTypeClass()} ${
          fadeOut ? styles.toastDisappear : styles.toastAppear
        }`}>
        <p>{toast.message}</p>
      </div>
    )
  );
};

export default ToastNotification;
