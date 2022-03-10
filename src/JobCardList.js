import JobCard from "./JobCard";

/**
 *  Renders JobCard
 *
 *  Props: list of jobs as array like [{salary, equity, title, id}, ...]
 *  State: None
 */
function JobCardList({ jobsList }) {
  console.log("Entering JobCardList Component", jobsList);

  return (
    <div>
      {jobsList.map((job) => {
        return (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        );
      })}
    </div>
  );
}

export default JobCardList;
