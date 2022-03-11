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

/**
 *  Renders NavBar and Routes. Handles user authentication logic
 *
 *  Props: None
 *  State: 
 *  - token: When updated, JWT token
 *  - user: When updated, object like {username, firstName, ...}
 *
 */
function App() {
  console.log("Entering App Component");
  console.log("localstorage first", localStorage.getItem("joblyToken"));
  const [token, setToken] = useState(localStorage.getItem("joblyToken") || null);
  const [user, setUser] = useState(null);


  console.log("localstorage second", localStorage.getItem("joblyToken"));
  useEffect(function getUserOnTokenChange() {
    async function fetchUserData() {
      const payload = jwt_decode(token);
      console.log("payload", payload);

      const currUser = await JoblyApi.getUserByUsername(payload.username);
      console.log("currUser", currUser.user);

      setUser(currUser.user);
      localStorage.setItem("joblyToken", token);
    }
    if (token !== null) {
      fetchUserData();
    }
  }, [token]);

  // TODO: Change the argument to something more generic like loginData/loginInfo
  async function handleLogin(loginData) {
    const token = await JoblyApi.login(loginData);
    setToken(() => token);
  }

  async function handleSignUp(signupData) {
    const token = await JoblyApi.signUp(signupData);
    setToken(() => token);
  }
  function handleLogout() {
    console.log("we made it to handleLogout");
    setToken(null);
    setUser(null);
    localStorage.removeItem('joblyToken');
  }

  async function handleUpdatePreferences(preferenceData){

    const response = await JoblyApi.updatePreferences(preferenceData)
    const { firstName, lastName, email } = response;

    setUser(userData => ({
      ...userData,
      [firstName]: firstName,
      [lastName]: lastName,
      [email]: email,
    }))
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <Routes
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            updatePreferences={handleUpdatePreferences} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
