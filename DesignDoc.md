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
Router (logical) -> (LandingPage, CompaniesList,CompanyURLHandler, JobsList)
Props: None
State: None


###
Landing Page (presentational)
Props: None
State: None


###
CompaniesList (logical) —> CompanyListDisplay 
Props: None
State: 	
-isFetching
-companyList
-userFormResponse //probably wont need this

CompanyListDisplay (presentational) —> SearchBar
Props: companyList (which should include links, logos, blurb, etc)
State: None

SearchBar (form)
Prop: addUserResponse (fn from CompaniesList)
State: formInput


###
CompanyDetail (logical) -> CompanyPage
Props: none (gets data from URL param)
State: Loading (fetching data)
Purpose: makes axios request based on URL param


CompanyPage (presentational) -> JobListDisplay
Props: Company info (object containing name, blurb, job ids{title, salary,etc})
State: None



###
JobList (logical) —> JobListDisplay
Props: None
State:
-isFetching
-jobList
-userFormResponse

JobListDisplay (presentational)
Props: joblist(job title, company name, salary, equity), 
State: None

SearchBar (form)
Prop: addUserResponse (fn from JobList)
State: formInput


###
Questions:
-Unused routes on backend? ie /jobs/:id


