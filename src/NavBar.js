import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

/**
 *  Renders Navigation bar with links to home, companies, jobs
 *
 *  Props: handleLogout
 *  State: None
 *  Context: User (username specifically)
 *
 */
function NavBar({ handleLogout }) {
  console.log("Entering NavBar Component");
  const { user } = useContext(UserContext);
  console.log("NavBar use context user", user);
  return (
    <nav className="NavBar">
      <NavLink className="NavBar-link" exact to="/">
        Jobly
      </NavLink>

      {user && <div>
        <NavLink className="NavBar-link" exact to="/companies">
          Companies
        </NavLink>
        <NavLink className="NavBar-link" exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink className="NavBar-link" exact to="/profile">
          Profile
        </NavLink>
        <Link to="/" className="Logout-btn" onClick={handleLogout}>
          Logout:
        </Link> {user.username}
      </div>}

      {!user && <div>
        <NavLink className="NavBar-link" exact to="/login">
          Login
        </NavLink>
        <NavLink className="NavBar-link" exact to="/signup">
          Sign Up
        </NavLink>
      </div>}
    </nav>
  );
}

export default NavBar;
