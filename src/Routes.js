import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

function Routes(){
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
          
        </Switch>
    )

}

export default Routes;