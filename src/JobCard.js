import "./JobCard.css"

function JobCard({title, salary, equity}) {
console.log("Entering JobCard Component");

    return (
        <div className="JobCard">
            <h3>{title}</h3>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
        </div>
    )
}

export default JobCard;