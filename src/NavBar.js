import { NavLink } from "react-router-dom";


/**
 *  Renders Navigation bar with links to home, companies, jobs
 *  
 *  Props: None
 *  State: None
 * 
 */
function NavBar() {
console.log("Entering NavBar Component");


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
    </nav>
  );
}

export default NavBar;
