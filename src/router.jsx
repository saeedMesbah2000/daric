import {Children} from "react";
import {createBrowserRouter} from "react-router";
import Login from "./features/indentity/Login";
import Register from "./features/indentity/Register";
import IdentityLayout from "./layouts/indentity-layout/IdentityLayout";

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
    ],
  },
]);

export default router;
