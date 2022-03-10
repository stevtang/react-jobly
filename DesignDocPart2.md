

###
Context
-HomePage ("welcome back XYZ")


###
API
-Need to pull APPLICATIONS table from BE to track application status on job cards
-Need to submit Patch/Update for user in Profile component
-Register user API call for Sign up Component


###
Components
-Need Profile in the NavBar
-This should inform our UserProfile/Preferences React Context
-Conditionally display/render the log out button for a user
-Sign up page (should hit register user API)
-Log in button in Nav bar AND homepage
-Redirect to login page for anyone that isnt authenticated


###
NavBar (presentational) -> (
    LandingPage (depends on authentication context),
    CompaniesList (depends on authentication context), 
    JobsList (depends on authentication context)
    )
Props: None
State: None

### (rendered in NavBar if not logged in)
LoginForm 
input: username, password
Props: handleLogin() from parent
State: formData


### (rendered in NavBar if not logged in)
SignUpForm
input: username, password, firstname, lastname, email
Props: handleSignUp() from parent
State: formData

### (rendered in NavBar if logged in)
LogOutButton

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
Props: handleApplication() from parent 
State: None

Routes:

/profile
/login 
/signup


As a part of authenticating a user, update the context from null to user data.
If a user authenticates and the context is updated, then that will allow
the other navbar links to display. 
THis isn't a security concern, because if they fake a token or user data, the
token will still be invalid, so none of the API calls in our useEffects will work