import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

import UserContext from "./UserContext";
import { Redirect } from "react-router-dom";



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

  useEffect(function getUserOnTokenChange() {
    async function fetchUserData() {
      const payload = jwt_decode(token);
      console.log("payload", payload);
      const currUser = await JoblyApi.getUserByUsername(payload.username);
      console.log("currUser", currUser.user);
      setUser(currUser.user);
    }
    if (token !== "") {
      fetchUserData();
    }
  }, [token]);


  async function handleLogin(formData) {
    const token = await JoblyApi.login(formData);
    setToken(() => token)
  }
 
  
  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes handleLogin={handleLogin} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
