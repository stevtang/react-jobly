import { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";


/**
 *  Renders Jobly homepage
 *
 *  Props: None
 *  State: None
 *
 */
function Homepage() {
  console.log("Entering Homepage Component");
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="Homepage">
        {user && <div>Welcome {user.username}!</div>}

        {!user && <div>
          <Link className="Homepage-login-btn" to="/login">
            <button>Login</button>
          </Link>
          <Link className="Homepage-signup-btn" to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>}
      </div>

    </div>
  );
}

export default Homepage;
