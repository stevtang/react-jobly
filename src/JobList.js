import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/**
 * Renders SearchForm and JobCardList
 *
 * Props: None
 * State:
 * -isFetching: Boolean (default true) to signal when loading is complete
 * -jobsList: Array of jobs like [{salary, equity, title, id}, ...]
 *
 */
function JobList() {
  console.log("Entering JobList Component");

  const [jobsList, setJobsList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(function fetchJobsOnMount() {
    async function fetchJobs() {
      setJobsList(await JoblyApi.getAllJobs());
      setIsFetching(false);
    }
    fetchJobs();
  }, []);
  /** Accepts search criteria(formData) from a search form as input
   * Returns a modified jobs list with the titles matching the search criteria
   */
  async function filterJobsByInput(formData) {
    const response = await JoblyApi.getJobByTitleFilter(formData);
    console.log("response in filterJob", response);
    setJobsList(response);
  }

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {isFetching || (
        <div>
          <SearchForm addSearchCriteria={filterJobsByInput} />
          <JobCardList jobsList={jobsList} />
        </div>
      )}
    </div>
  );
}

export default JobList;
