import {Children} from "react";
import {createBrowserRouter} from "react-router";
import IdentityLayout from "./layouts/indentity-layout/IdentityLayout";
import {Login, Register, Verification} from "./features";

const router = createBrowserRouter([
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
