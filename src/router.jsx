import {createBrowserRouter} from "react-router";
import IdentityLayout from "./layouts/indentity-layout/IdentityLayout";
import {Login, Register, Verification} from "./features";
import MainLayout from "./layouts/main-layout/MainLayout";
import {
  AboutUs,
  Home,
  NotFoundPage,
  Profile,
  Rules,
  Settings,
  Support,
} from "./pages";

import React from "react";
import {useParams, Navigate} from "react-router";

const RouteWithParams = () => {
  const {routeName} = useParams();

  switch (routeName) {
    case "home":
      return <Home />;
    case "aboutUs":
      return <AboutUs />;
    case "profile":
      return <Profile />;
    case "rules":
      return <Rules />;
    case "settings":
      return <Settings />;
    case "support":
      return <Support />;
    default:
      return <Navigate to="/404" />;
  }
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/", // Main layout will be on the root
    children: [
      // Route with dynamic 'routeName' parameter
      {path: "/:routeName", element: <RouteWithParams />},
      {path: "*", element: <NotFoundPage />}, // Optional: Handle 404 for unmatched routes
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {path: "login", element: <Login />},
      {path: "register", element: <Register />},
      {path: "verification", element: <Verification />},
    ],
  },
]);

export default router;
