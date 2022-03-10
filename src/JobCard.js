import "./JobCard.css";
/**
 * Renders card containing job information
 *
 * Props: title, salary, equity
 *
 * State: None
 *
 */
function JobCard({ title, salary, equity }) {
  console.log("Entering JobCard Component");
// CR: add company name if there is one, (list of jobs page has company name)
  return (
    <div className="JobCard">
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;
