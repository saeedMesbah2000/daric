import {createBrowserRouter} from "react-router";
import Login from "./features/indentity/Login";
import Register from "./features/indentity/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
