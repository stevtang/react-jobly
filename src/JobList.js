import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

// TODO: pass search for our handle search function whatever we name it
function JobList(){
console.log("Entering JobList Component");

    return (<div>JobList
        <SearchForm />
        <JobCardList />
    </div>);
}

export default JobList;