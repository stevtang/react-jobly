import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import { useEffect, useState } from "react";

 

function CompanyList(){
console.log("Entering CompanyList Component");
    const [isFetching, setIsFetching] = useState(true);
    const [companyList, setCompanyList] = useState([]);

    useEffect(function fetchCompaniesOnMount() {
        async function fetchCompanies(){
            setCompanyList(await JoblyApi.getAllCompanies())
            // return await JoblyApi.getAllCompanies();
        }
        fetchCompanies();
    }, []);


    
    

    return (
    <div>
        CompanyList
        <SearchForm />
        <CompanyCard />
    </div>
        );
}

export default CompanyList;