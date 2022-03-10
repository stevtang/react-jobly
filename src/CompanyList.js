import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import { useEffect, useState } from "react";


/**
 *  Renders Search Form and Company Cards
 * 
 *  Props: None
 *  State:
 *  -isFetching: Boolean (default true) to signal when loading is complete
 *  -companyList: Array of companies like [{handle, name, jobs{id, title,...},...}]
 * 
 */
function CompanyList() {
    console.log("Entering CompanyList Component");

    const [isFetching, setIsFetching] = useState(true);
    const [companyList, setCompanyList] = useState([]);

    console.log("CompanyList state isFetching", isFetching);
    console.log("CompanyList state companyList", companyList);


    useEffect(function fetchCompaniesOnMount() {
        console.log("inside fetchCompaniesOnMount");
        async function fetchCompanies() {
            console.log("inside async fetchCompanies");
            setCompanyList(await JoblyApi.getAllCompanies());
        }
        fetchCompanies();
        setIsFetching(false);
    }, []);

    /** Accepts search criteria(formData) from a search form as input
     * Returns a modified company list with the names matching the search criteria
     */
    async function filterCompaniesByInput(formData) {
        const response = await JoblyApi.getCompanyByNameFilter(formData);
        console.log("response in filtercompany", response);
        setCompanyList(response);
    }

    if (isFetching) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            {isFetching ||
                < div >
                    <SearchForm addSearchCriteria={filterCompaniesByInput} />
                    {companyList.map(comp => {
                        return (
                            <CompanyCard
                                key={comp.handle}
                                handle={comp.handle}
                                name={comp.name}
                                description={comp.description}
                                numEmployees={comp.numEmployees}
                                logoUrl={comp.logoUrl} />
                        )
                    })}

                </div >}
        </div>
    );
}

export default CompanyList;