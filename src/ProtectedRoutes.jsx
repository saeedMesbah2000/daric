import React from "react";
import {useAuth} from "./contexts/authContext";
import {Navigate} from "react-router";

const ProtectedRoutes = ({children}) => {
  const {auth} = useAuth();
  console.log(auth);

  return <>{auth.isAuthorized ? children : <Navigate to={"/login"} />}</>;
};

export default ProtectedRoutes;
