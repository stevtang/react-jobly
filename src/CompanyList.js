import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import { useEffect, useState } from "react";



function CompanyList() {
    console.log("Entering CompanyList Component");
    
    const [isFetching, setIsFetching] = useState(true);
    const [companyList, setCompanyList] = useState([]);

    console.log("CompanyList state isFetching",isFetching);
    console.log("CompanyList state companyList",companyList);


    useEffect(function fetchCompaniesOnMount() {
        console.log("inside fetchCompaniesOnMount")
        async function fetchCompanies() {
             console.log("inside async fetchCompanies")
            setCompanyList(await JoblyApi.getAllCompanies())
            // return await JoblyApi.getAllCompanies();
        }
        fetchCompanies();
        setIsFetching(false);
    }, []);


    console.log(companyList)


    return (
        <div>
            { isFetching || 
            < div >
                <SearchForm/>
                {companyList.map(comp => {
                return(
                    <CompanyCard 
                    handle={comp.handle}
                    name={comp.name}
                    description={comp.description}
                    numEmployees={comp.numEmployees}
                    logoUrl={comp.logoUrl}/>
                )})}
                
            </div >}
        </div>
        );
}

export default CompanyList;