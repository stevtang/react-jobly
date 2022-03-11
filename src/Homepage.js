import { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Homepage() {
  console.log("Entering Homepage Component");
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="Homepage">
        {Object.keys(user).length > 0    && <div>Welcome {user.username}!</div>}

        {Object.keys(user).length === 0 && <div>
          <Link className="Homepage-login-btn"  to="/login">
            <button>Login</button>
          </Link>
          <Link className="Homepage-signup-btn"  to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>}
      </div>
      
    </div>
  );
}

export default Homepage;
