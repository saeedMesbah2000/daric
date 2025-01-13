import {useState} from "react";
import {Home} from "./pages";
import {Navigate} from "react-router-dom";

function App() {
  const [user, setUser] = useState({loggedIn: false});

  return <>{user?.loggedIn ? <Home /> : <Navigate to={"/login"} />}</>;
}

export default App;
