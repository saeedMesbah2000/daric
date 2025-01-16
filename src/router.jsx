import {Children} from "react";
import {createBrowserRouter} from "react-router";
import IdentityLayout from "./layouts/indentity-layout/IdentityLayout";
import {Login, Register, Verification} from "./features";
import MainLayout from "./layouts/main-layout/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{path: "/home", element: <Home />}],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/verification",
        element: <Verification />,
      },
    ],
  },
]);

export default router;
