import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NotFoundPage, Login, Register} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/home?",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
