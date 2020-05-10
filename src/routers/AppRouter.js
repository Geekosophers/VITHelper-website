import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Add from '../components/Add';
import CAT1Papers from '../components/CAT1Papers';
import Rules from '../components/Rules';
import NotFoundPage from '../components/NotFoundPage';
import CAT2Papers from '../components/CAT2Papers';
import Materials from '../components/Materials';
import Faqs from '../components/Faqs';
import FATPapers from '../components/FATPapers';
import Blogs from '../components/Blogs';
import Blog1 from '../components/Blog1';
import Blog2 from '../components/Blog2';
import Blog3 from '../components/Blog3';
import Blog4 from '../components/Blog4';
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
import AboutUsForMobile from '../components/AboutUsForMobile';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <HeaderForMobile />
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        {/* <Route path="/blogs" component={Blogs} /> */}
        <PrivateRoute path="/about-us" component={AboutUsForMobile} />
        <PrivateRoute path="/cat1papers" component={CAT1Papers} />
        {/* <PrivateRoute path="/add" component={Add} history={history}/> */}
        <PrivateRoute path="/cat2papers" component={CAT2Papers} />
        <PrivateRoute path="/fatpapers" component={FATPapers} />
        <PrivateRoute path="/materials" component={Materials} />
        <PrivateRoute path="/faqs" component={Faqs} />
        <PrivateRoute path="/placements" component={Placements} exact={true}/>
        <PrivateRoute path="/placements/pat" component={PAT} />
        <PrivateRoute path="/placements/resources" component={Resources} />
        <PrivateRoute path="/placements/advice" component={Advice} />
        <PrivateRoute path="/placements/topics" component={Topics} />
        <PrivateRoute path="/placements/news" component={Placements} />
        <PrivateRoute path="/placements/rules" component={Rules} />
        <PrivateRoute path="/blogs" component={Blogs} />
        <PrivateRoute path="/hostel-vacating-procedure" component={Blog1} />
        <PrivateRoute path="/room-counselling" component={Blog2} />
        <PrivateRoute path="/npm-package" component={Blog3} />
        <PrivateRoute path="/placement-guide" component={Blog4} />
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
