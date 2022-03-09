import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

function CompanyDetail() {
console.log("Entering CompanyDetail Component");

    const [companyDetails, setCompanyDetails] = useState({})
    const [isFetching, setIsFetching] = useState(true);
    
    const params = useParams()
    console.log("inside company detail params:", params);
    useEffect(function fetchCompanyDetailOnMount(){
        console.log("inside fetchCompanyDetailOnMount")
        async function fetchCompanyDetail(){
            console.log("inside fetchCompanyDetail")
            const response = await JoblyApi.getCompany(params.handle)
            setCompanyDetails(response);

        }
        fetchCompanyDetail();
        setIsFetching(false);
    }, [])

    console.log("jobs:", companyDetails.jobs)
    if(isFetching){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {isFetching ||
            <JobCardList jobsList={companyDetails.jobs} />}
        </div>
    );
}

export default CompanyDetail;