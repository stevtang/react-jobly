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
 *  Props: None
 *  State: None
 *
 */
function Routes({ handleLogin, handleSignUp }) {
  console.log("Entering Routes Component");
  const { user } = useContext(UserContext);
  return (
    <Switch>
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

        </Switch>
      )}
      {user && (
        <Switch>
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
            <ProfileForm />
          </Route>
        </Switch>
      )}

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
