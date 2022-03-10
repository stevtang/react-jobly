import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

/**
 *  Renders JobCardLIst
 * 
 *  Props: None
 *  State:
 *  -isFetching: Boolean (default true) to signal when loading is complete
 *  -companyDetails: Array for company like [{handle, name, jobs{id, title,...},...}]
 * 
 */
function CompanyDetail() {
    console.log("Entering CompanyDetail Component");

    const [companyDetails, setCompanyDetails] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const params = useParams();
    console.log("inside company detail params:", params);
    useEffect(function fetchCompanyDetailOnMount() {
        console.log("inside fetchCompanyDetailOnMount")
        async function fetchCompanyDetail() {
            console.log("inside fetchCompanyDetail");
            setCompanyDetails(await JoblyApi.getCompany(params.handle));
            setIsFetching(false);
        }
        fetchCompanyDetail();
    }, [params.handle])

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {isFetching ||
                <div>
                    <h1>Available Jobs for {companyDetails.name}</h1>
                    <p>{companyDetails.description}</p>
                    <JobCardList jobsList={companyDetails.jobs} />
                </div>
            }
        </div>
    );
}

export default CompanyDetail;