/*
this component is for showing the toast messages by adding new message the list of message 
*/

import React, {useState} from "react";

const useMessage = () => {
  const [toastMessages, setToastMessages] = useState([]);

  // this function take inpue string and adds it to the list of messages
  const showMessage = (inputMessage) => {
    setToastMessages((preState) => {
      const temp = [...preState];
      temp.push({
        message: inputMessage,
        id: temp.length + 1,
      });
      return temp;
    });
  };

  return {
    toastMessages,
    setToastMessages,
    showMessage,
  };
};

export default useMessage;
