import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

import UserContext from "./UserContext";



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
  
  useEffect(function XYZ(){
    async function ABC(){
      const payload = jwt_decode(token);
      console.log("payload",payload);
      const currUser = await JoblyApi.getUserByUsername(payload.username);
      console.log("currUser", currUser.user);
      setUser(currUser);
    }
    ABC();
  }, [token]);


  async function handleLogin(formData) {
    const token = await JoblyApi.login(formData);
    setToken(() => token)
  }

  const username = user?.username;
  console.log("username in app", username);



  return (
    <div className="App">
      <UserContext.Provider value={{username}}>
      <BrowserRouter>
        <NavBar />
        <Routes handleLogin={handleLogin} />
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
