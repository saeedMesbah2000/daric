import router from "./router";
import {RouterProvider} from "react-router";
import {AuthProvider} from "./contexts/authContext";
import ToastNotification from "./features/toast/ToastNotification";
import {ToastProvider} from "./contexts/toastContext";

function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
      <ToastNotification />
    </ToastProvider>
  );
}

export default App;
