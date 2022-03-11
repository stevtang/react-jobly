import { Link } from "react-router-dom";

function Logout({handleLogout}) {
  return (
    <Link className="Logout-btn" onClick={handleLogout}>
      Logout
    </Link>
  );
}

export default Logout;
