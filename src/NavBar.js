import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

/**
 *  Renders Navigation bar with links to home, companies, jobs
 *
 *  Props: None
 *  State: None
 *
 */
function NavBar() {
  console.log("Entering NavBar Component");
  const { username } = useContext(UserContext);
  console.log("NavBar use context username", username);
  return (
    <nav className="NavBar">
      <NavLink className="NavBar-link" exact to="/">
        Jobly
      </NavLink>
      <NavLink className="NavBar-link" exact to="/companies">
        Companies
      </NavLink>
      <NavLink className="NavBar-link" exact to="/jobs">
        Jobs
      </NavLink>
      <NavLink className="NavBar-link" exact to="/login">
        Login
      </NavLink>
      <NavLink className="NavBar-link" exact to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="NavBar-link" exact to="/profile">
        Profile
      </NavLink>
      <NavLink className="NavBar-link" exact to="/logout">
        Logout User: {username}
      </NavLink>
    </nav>
  );
}

export default NavBar;
