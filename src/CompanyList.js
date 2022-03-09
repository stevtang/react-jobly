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


    // TODO: write function to use our new API call to filter by searchform data
    async function filterCompaniesByInput(formData){
        const response = await JoblyApi.getCompanyByNameFilter(formData);
        console.log("response in filtercompany", response);
        setCompanyList(response);

    }

    // console.log(companyList);


    return (
        <div>
            { isFetching || 
            < div >
                <SearchForm addSearchCriteria={filterCompaniesByInput}/>
                {companyList.map(comp => {
                return(
                    <CompanyCard 
                    key={comp.handle}
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