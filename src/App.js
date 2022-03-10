import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

/**
 *  Renders NavBar and Routes
 *
 *  Props: None
 *  State: None
 *
 */
function App() {
  console.log("Entering App Component");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const payload = jwt_decode(token);
  console.log(payload);
  
  useEffect(function XYZ(){
    async function ABC(){
      const payload = jwt_decode(token);
      console.log(payload);
      // const userLoggedIn = await JoblyApi.getUserByUsername(formData.username);
      // setUser(userLoggedIn);
    }
    ABC();
  }, [token]);


  async function handleLogin(formData) {
    const token = await JoblyApi.login(formData);
    setToken(() => token)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes handleLogin={handleLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
