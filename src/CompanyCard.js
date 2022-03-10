// TODO: update the doc string. Clarify the props
import { Link } from "react-router-dom";
import "./CompanyCard.css"

/**
 *  Renders a Link component containing company details
 * 
 *  Props: handle, name, description, numEmployees, logoUrl 
 * 
 *  State: None
 */
function CompanyCard({ handle, name, description, numEmployees, logoUrl }) {

    // Ternary to use placeholder since we are destructuring the prop above
    let logo = logoUrl ? logoUrl : "/logos/default_image.png";

    console.log("Entering CompanyCard, data:", logoUrl);
    // CR: wrap link with div and give classname to div not Link
    return (
        <Link className="CompanyCardLink" to={`/companies/${handle}`}>
            <div className="CompanyCard">
                <img className="CompanyCardImage" src={logo} alt="logo" />
                <h3>{name}</h3>
                <p>About: {description}</p>
                <p>Total Employees: {numEmployees}</p>
            </div>
        </Link>
    );
}

export default CompanyCard;