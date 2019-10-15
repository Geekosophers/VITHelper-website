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
import HeaderForMobile from '../components/HeaderForMobile';
import PrivateRoute from './PrivateRoute';
import Placements from '../components/Placements';
import PublicRoute from './PublicRoute';
import ShowPlacementArticle from '../components/ShowPlacementArticle';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <HeaderForMobile />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/cat1papers" component={CAT1Papers} />
        <Route path="/cat2papers" component={CAT2Papers} />
        <Route path="/fatpapers" component={FATPapers} />
        <Route path="/materials" component={Materials} />
        <Route path="/placements" component={Placements} exact={true}/>
        <Route path="/placements/pat" component={Placements} />
        <Route path="/placements/resources" component={Placements} />
        <Route path="/placements/advice" component={Placements} />
        <Route path="/placements/topics" component={Placements} />
        <Route path="/placements/news" component={Placements} />
        <Route path="/placements/rules" component={Placements} />
        <Route path="/placements/article" component={Placements} exact={true}/>
        <Route path="/placements/article/:id" component={ShowPlacementArticle} />
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
