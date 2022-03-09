// TODO: update the doc string. Clarify the props
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, numEmployees, logoUrl="/logos/default_image.png"}){
    console.log("Entering CompanyCard, data:", logoUrl);
    return (
        <Link>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={logoUrl} alt="logo"/>
        </Link>
    )
}

export default CompanyCard;