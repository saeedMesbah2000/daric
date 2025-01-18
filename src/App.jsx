import router from "./router";
import {RouterProvider} from "react-router";
import {AuthProvider} from "./contexts/authContext";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
