import React from "react";
import {useParams, Navigate} from "react-router";
import {createBrowserRouter} from "react-router";
import IdentityLayout from "./layouts/indentity-layout/IdentityLayout";
import {Login, Register, Verification} from "./features";
import MainLayout from "./layouts/main-layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import {
  AboutUs,
  Home,
  NotFoundPage,
  Profile,
  Rules,
  Services,
  Settings,
  Support,
  Transactions,
  Wallet,
} from "./pages";

const routeMapping = {
  home: <Home />,
  aboutUs: <AboutUs />,
  profile: <Profile />,
  rules: <Rules />,
  settings: <Settings />,
  support: <Support />,
  services: <Services />,
  transactions: <Transactions />,
  wallet: <Wallet />,
};

const RouteWithParams = () => {
  const {routeName} = useParams();

  return routeMapping[routeName];
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Route with dynamic 'routeName' parameter
      {
        path: "/:routeName",
        element: (
          <ProtectedRoutes>
            <RouteWithParams />
          </ProtectedRoutes>
        ),
      },
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
