import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { useState } from "react";
import JoblyApi from "./api";

/**
 *  Renders NavBar and Routes
 *
 *  Props: None
 *  State: None
 *
 */
function App() {
  console.log("Entering App Component");
  const [user, setUser] = useState({});

  async function handleLogin(formData) {
    const token = await JoblyApi.login(formData);
    if (token) {
      const userLoggedIn = await JoblyApi.getUserByUsername(formData.username);
      setUser(userLoggedIn);
    }
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
