import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";
import UserContext from "./UserContext";
import { useContext } from "react";

/**
 *  Handles routes across the site.
 *
 *  Props: handleLogin (fn), handleSignup (fn), updatePreferences(fn)
 *  State: None
 *  Context: User
 *
 */
function Routes({ handleLogin, handleSignUp, updatePreferences }) {
  console.log("Entering Routes Component");

  const { user } = useContext(UserContext);
  return (
    <>
      {!user && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <LoginForm handleLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <SignUpForm handleSignUp={handleSignUp} />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}

      {user && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            <CompanyList />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/jobs">
            <JobList />
          </Route>
          <Route exact path="/profile">
            <ProfileForm updatePreferences={updatePreferences} />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
}

export default Routes;
