import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

// TODO: pass search for our handle search function whatever we name it
function JobList(){
console.log("Entering JobList Component");

    const [jobsList, setJobsList] = useState([]);
    const [isFetching, setIsFetching] =useState(true);


    useEffect(function fetchJobsOnMount(){
        async function fetchJobs(){
            setJobsList(await JoblyApi.getAllJobs());
            setIsFetching(false);
        }
        fetchJobs();
    }, []);
    async function filterJobsByInput(formData){

    }

    return (<div>JobList
        <SearchForm addSearchCriteria={filterJobsByInput}/>
        <JobCardList />
    </div>);
}

export default JobList;