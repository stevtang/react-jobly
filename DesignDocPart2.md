
----- GENERAL -----

###
API
-Need to pull APPLICATIONS table from BE to track application status on job cards
-Need to submit Patch/Update for user in Profile component
-Register user API call for Sign up Component
-Login User


(CR: Fire up insomnia to see what information is returned from each route)



----- COMPONENTS -----

###
NavBar - Logged Out (presentational) -> (
    LandingPage
    Login, 
    Sign Up
    )
Props: None
State: None

###
NavBar - Logged In (presentational) -> (
    LandingPage (depends on authentication context),
    CompaniesList (depends on authentication context), 
    JobsList (depends on authentication context),
    Profile,
    LogOutButton
    )
Props: None
State: None

###
LoginForm 
input: username, password
Props: handleLogin() from parent
State: formData

###
SignUpForm
input: username, password, firstname, lastname, email
Props: handleSignUp() from parent
State: formData

###
LogOutButton (likely just clears localStorage)
CR: Think about other user state still remaining in the system (RESET ALL)

###
Context (will eventually be provided FirstName,LastName, authentication status)
CR: Try not to put user `functionality` here

### 
ProfileForm
inputs with default values: username, firstname, lastname, email
Props: handleSaveChanges() from parent
State: formData

###
JobCardList -> JobCard -> ApplyStatusButton
Props: joblist(job title, company name, salary, equity)
State: isFetching(fetching application status)

###
ApplyStatusButton (component)
Props: handleApplication() from parent, applyStatus
State: None

###
Routes:

/profile
/login 
/signup


CR: App is the place for all of our user specific data


As a part of authenticating a user, update the context from null to user data.
If a user authenticates and the context is updated, then that will allow
the other navbar links to display. 
THis isn't a security concern, because if they fake a token or user data, the
token will still be invalid, so none of the API calls in our useEffects will work