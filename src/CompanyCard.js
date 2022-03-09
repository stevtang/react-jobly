// TODO: update the doc string. Clarify the props
import { Link } from "react-router-dom";
import "./CompanyCard.css"

function CompanyCard({ handle, name, description, numEmployees, logoUrl }) {

    // Ternary to use placeholder since we are destructuring the prop above
    let logo = logoUrl ? logoUrl : "/logos/default_image.png"

    console.log("Entering CompanyCard, data:", logoUrl);
    return (
        <Link className="CompanyCardLink" to={`/companies/${handle}`}>
            <div className="CompanyCard">
                <img className="CompanyCardImage" src={logo} alt="logo" />
                <h3>{name}</h3>
                <p>About: {description}</p>
                <p>Total Employees: {numEmployees}</p>
            </div>
        </Link>
    )
}

export default CompanyCard;