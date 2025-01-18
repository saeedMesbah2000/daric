import {useState} from "react";
import {createContext, useContext} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({isAuthorized: false});

  const login = () => setAuth({isAuthorized: true});
  const logout = () => setAuth({isAuthorized: false});

  return (
    <AuthContext.Provider value={{auth, setAuth, logout, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
