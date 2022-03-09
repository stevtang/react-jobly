import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

function JobList(){
console.log("Entering JobList Component");

    return (<div>JobList
        <SearchForm />
        <JobCardList />
    </div>);
}

export default JobList;