import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

// TODO: pass search for our handle search function whatever we name it
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

    async function filterJobsByInput(formData) {
        const response = await JoblyApi.getJobByTitleFilter(formData);
        console.log("response in filterJob", response);
        setJobsList(response);
    }

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {isFetching ||
                <div>
                    <SearchForm addSearchCriteria={filterJobsByInput} />
                    <JobCardList jobsList={jobsList} />
                </div>}
        </div>
    );
}

export default JobList;