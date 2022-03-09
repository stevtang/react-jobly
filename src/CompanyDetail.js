import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

function CompanyDetail() {
console.log("Entering CompanyDetail Component");

    const [companyDetails, setCompanyDetails] = useState({})
    const [isFetching, setIsFetching] = useState(true);

    const params = useParams()

    useEffect(function fetchCompanyDetailOnMount(){
        async function fetchCompanyDetail(){
            const response = await JoblyApi.getCompany(params.handle)
            setCompanyDetails(response);

        }
        fetchCompanyDetail();
        setIsFetching(false);
    }, [])

    console.log(companyDetails)

    return (
        <div>CompanyDetail
            <JobCardList />
        </div>
    );
}

export default CompanyDetail;