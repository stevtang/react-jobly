import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

import UserContext from "./UserContext";
import { Redirect } from "react-router-dom";

// TODO: Consider graceful error handling for our API routes. Maybe try/catch
// TODO: Maybe add alert component

// TODO: QUESTION TO REVIEWERS - Does order of React hooks matter? We were getting
// errors when we put useContext(UserContext) ahead of our state and useEffects

/**
 *  Renders NavBar and Routes
 *
 *  Props: None
 *  State: None
 *
 */
function App() {
  console.log("Entering App Component");
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(function getUserOnTokenChange() {
    async function fetchUserData() {
      const payload = jwt_decode(token);
      console.log("payload", payload);
      const currUser = await JoblyApi.getUserByUsername(payload.username);
      console.log("currUser", currUser.user);
      setUser(currUser.user);
    }
    if (token !== null) {
      fetchUserData();
    }
  }, [token]);


  async function handleLogin(formData) {
    const token = await JoblyApi.login(formData);
    setToken(() => token)
  }
 
  async function handleSignUp(formData){
    const token = await JoblyApi.signUp(formData);
    setToken(()=> token);
  }
  function handleLogout(){
    setToken(null);
    setUser(null);
  }
  
  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes handleLogin={handleLogin} handleSignUp={handleSignUp} handleLogout={handleLogout}/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
