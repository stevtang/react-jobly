Jobly React component design

###
App (logical) -> (Browser Router, NavBar, Router)
Props: None
State: None

###
NavBar (presentational) -> (LandingPage, CompaniesList, JobsList)
Props: None
State: None


###
Router (logical) -> (CompanyURLHandler, JobPage, LandingPage, CompaniesList, JobsList)
Props: None
State: None


###
Landing Page (presentational)
Props: None
State: None


###
CompaniesList (logical) —> CompanySearch Page
Props: None
State: 	
-isFetching
-companyList
-userFormResponse

CompanySearchPage (presentational) —> SearchBar
Props: companyList (which should include links, logos, blurb, etc)
State: None

SearchBar (form)
Prop: addUserResponse (fn from CompaniesList)
State: formInput


###
CompanyURLHandler (logical) -> CompanyPage
Props: none (gets data from URL param)
State: Loading (fetching data)
Purpose: makes axios request based on URL param


CompanyPage (presentational)
Props: Company info (object containing name, blurb, job ids{title, salary,etc})
State: None



###
JobList —> 





Card (presentational)
Props: 
- Company info
- Link to job (optional)