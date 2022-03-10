import JobCard from "./JobCard";

function JobCardList({jobsList}){
console.log("Entering JobCardList Component", jobsList);

    return(
        <div>
        {jobsList.map(job => {
            return(
                <JobCard
                key={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}/>)
            })}
        
        </div>
    )
}

export default JobCardList;