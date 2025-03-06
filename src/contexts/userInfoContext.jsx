import {useContext} from "react";
import {useState} from "react";
import {createContext} from "react";

const UserInfoContext = createContext();

export const UserInfoProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    default_payment_amount: "",
    phoneNumber: "",
    qr_code_id: "",
    socialSecureNumber: "",
    walletBalance: "",
  });

  return (
    <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};
