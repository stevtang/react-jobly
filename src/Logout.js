import { Link } from "react-router-dom";


/**
 *  Sets App state to null in order to logout user across the site
 *
 *  Props: handleLogout (fn)
 *  State: None
 *
 */

// TODO: We can move this to the NavBar and reduce by one component
function Logout({ handleLogout }) {
  return (
    <Link to="/" className="Logout-btn" onClick={handleLogout}>
      Logout:
    </Link>
  );
}

export default Logout;
