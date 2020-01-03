import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CAT1Papers from '../components/CAT1Papers';
import Rules from '../components/Rules';
import NotFoundPage from '../components/NotFoundPage';
import CAT2Papers from '../components/CAT2Papers';
import Materials from '../components/Materials';
import FATPapers from '../components/FATPapers';
import Blogs from '../components/Blogs';
import LoginPage from '../components/LoginPage';
import Reviews from '../components/Reviews';
import Advice from '../components/Advice';
import PAT from '../components/PAT';
import HeaderForMobile from '../components/HeaderForMobile';
import PrivateRoute from './PrivateRoute';
import Placements from '../components/Placements';
import PublicRoute from './PublicRoute';
import ShowPlacementArticle from '../components/ShowPlacementArticle';
import Resources from '../components/Resources';
import Topics from '../components/Topics';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <HeaderForMobile />
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        {/* <Route path="/blogs" component={Blogs} /> */}
        <PrivateRoute path="/cat1papers" component={CAT1Papers} />
        <PrivateRoute path="/cat2papers" component={CAT2Papers} />
        <PrivateRoute path="/fatpapers" component={FATPapers} />
        <PrivateRoute path="/materials" component={Materials} />
        <PrivateRoute path="/placements" component={Placements} exact={true}/>
        <PrivateRoute path="/placements/pat" component={PAT} />
        <PrivateRoute path="/placements/resources" component={Resources} />
        <PrivateRoute path="/placements/advice" component={Advice} />
        <PrivateRoute path="/placements/topics" component={Topics} />
        <PrivateRoute path="/placements/news" component={Placements} />
        <PrivateRoute path="/placements/rules" component={Rules} />
        <PrivateRoute path="/blogs" component={Blogs} />
        {/* <Route path="/" component={LoginPage} /> */}
        <PrivateRoute path="/placements/article" component={Reviews} exact={true}/>
        <PrivateRoute path="/placements/article/:id" component={ShowPlacementArticle} />
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
