import React, {createContext, useContext, useState} from "react";

const ToastContext = createContext();

export const ToastProvider = ({children}) => {
  const [toast, setToast] = useState({
    message: "",
    type: "info",
    isOpen: false,
  });

  const showToast = (message, type = "info") => {
    setToast({message, type, isOpen: true});

    setTimeout(() => {
      setToast((prev) => ({...prev, isOpen: false}));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{toast, showToast}}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
