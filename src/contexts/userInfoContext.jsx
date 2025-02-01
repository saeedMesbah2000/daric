import {useContext} from "react";
import {useState} from "react";
import {createContext} from "react";

const UserInfoContext = createContext();

export const UserInfoProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "سعید",
    lastName: "مصباح",
    phoneNumber: "09129630973",
    email: "",
    socialSecureNumber: "0024235164",
    walletValue: "45000",
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
