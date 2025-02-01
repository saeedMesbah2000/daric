import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import {AuthProvider} from "./contexts/authContext.jsx";
import {UserInfoProvider} from "./contexts/userInfoContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </AuthProvider>
);
