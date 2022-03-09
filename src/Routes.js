import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import { Redirect } from 'react-router-dom';

function Routes(){
console.log("Entering Routes Component");

    return(
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route exact path='/companies'>
            <CompanyList />
          </Route>
          <Route exact path='/companies/:handle'>
            <CompanyDetail />
          </Route>
          <Route  exact path='/jobs'>
            <JobList />
          </Route>
          <Redirect to="/" />
        </Switch>
    )

}

export default Routes;
// TODO: CR: add 404
// CR: add your console logs in all componenets
// WE got here, here are our props