import React, {useState, useEffect, useCallback} from "react";
import styles from "./Notification.module.css";

/*
this component is a toast message component to show the result of the operations such as api call results

input argument : 

1- hasError : to change the color of the toast message if the operation fails

2- listOfMessages : it is the list of messages that are going to display

3- setListOfMessages : it is a function that manipulates the list of messages

*/

const Notification = ({
  hasError = false,
  listOfMessages = [],
  setListOfMessages,
}) => {
  // it will delete the the message with the given id
  const deleteToastMessage = useCallback(
    (id) => {
      const newList = listOfMessages.filter((e) => e.id !== id);
      setListOfMessages(newList);
    },
    [listOfMessages, setListOfMessages]
  );

  //  it will call deleteToastMessage to delete the first message of the list (FIFO) after 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (listOfMessages.length) {
        deleteToastMessage(listOfMessages[0].id);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [listOfMessages]);

  return (
    <>
      {listOfMessages.map((item) => {
        return (
          <div
            className={`${styles.toast} ${
              hasError ? styles.toastError : styles.toastSuccess
            }`}>
            <p className={styles.toastMessage}>
              <span
                className={
                  hasError ? styles.toastErrorBold : styles.toastSuccessBold
                }>
                {hasError ? "Failed " : "Well done "}
              </span>{" "}
              {item.message}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Notification;
