import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ProfileForm from './ProfileForm';
import Logout from './Logout';

/**
 *  Handles routes across the site.
 * 
 *  Props: None
 *  State: None
 * 
 */
function Routes() {
  console.log("Entering Routes Component");

  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/companies'>
        <CompanyList />
      </Route>
      <Route exact path='/companies/:handle'>
        <CompanyDetail />
      </Route>
      <Route exact path='/jobs'>
        <JobList />
      </Route>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route exact path='/signup'>
        <SignUpForm />
      </Route>
      <Route exact path='/profile'>
        <ProfileForm />
      </Route>
      
      <Redirect to="/" />
    </Switch>
  )

}

export default Routes;