import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Blogs from '../components/Blogs';
import CAT1Papers from '../components/CAT1Papers';
import MainPage from '../components/MainPage';
import NotFoundPage from '../components/NotFoundPage';
import CAT2Papers from '../components/CAT2Papers';
import Materials from '../components/Materials';
import FATPapers from '../components/FATPapers';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/blogs" component={Blogs} />
        <PrivateRoute path="/cat1papers" component={CAT1Papers} />
        <PrivateRoute path="/cat2papers" component={CAT2Papers} />
        <PrivateRoute path="/fatpapers" component={FATPapers} />
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
