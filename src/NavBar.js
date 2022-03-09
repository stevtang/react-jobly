import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <nav className = "NavBar">
            <NavLink exact to="/">
                Jobly
            </NavLink>
            <NavLink exact to="/companies">
                Companies
            </NavLink>
            <NavLink exact to="/jobs">
                Jobs
            </NavLink>
        </nav>
    )

}

export default NavBar