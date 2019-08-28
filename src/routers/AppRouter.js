import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import MainPage from '../components/MainPage';
import NotFoundPage from '../components/NotFoundPage';
import Materials from '../components/Materials';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/materials" component={Materials} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

// const AppRouter = () => (
//   <Router history={history}>
//     <div>
//       <Switch>
//         <Route path="/" component={LoginPage} exact={true} />
//         <Route path="/dashboard" component={DashboardPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </Router>
// );

export default AppRouter;
