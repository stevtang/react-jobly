

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





As a part of authenticating a user, update the context from null to user data.
If a user authenticates and the context is updated, then that will allow
the other navbar links to display. 
THis isn't a security concern, because if they fake a token or user data, the
token will still be invalid, so none of the API calls in our useEffects will work