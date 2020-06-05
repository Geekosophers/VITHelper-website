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
import Blog5 from '../components/Blog5';
import LoginPageNew from '../components/LoginPageNew';
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
        <Route path="/" component={AboutUsForMobile} exact={true} />
        {/* <Route path="/blogs" component={Blogs} /> */}
        {/* <Route path="/about-us" component={AboutUsForMobile} /> */}
        <Route path="/cat1papers" component={CAT1Papers} />
        {/* <PrivateRoute path="/add" component={Add} history={history}/> */}
        <Route path="/cat2papers" component={CAT2Papers} />
        <Route path="/fatpapers" component={FATPapers} />
        <Route path="/materials" component={Materials} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/placements" component={Placements} exact={true}/>
        <Route path="/placements/pat" component={PAT} />
        <Route path="/placements/resources" component={Resources} />
        <Route path="/placements/advice" component={Advice} />
        <Route path="/placements/topics" component={Topics} />
        <Route path="/placements/news" component={Placements} />
        <Route path="/placements/rules" component={Rules} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/hostel-vacating-procedure" component={Blog1} />
        <Route path="/room-counselling" component={Blog2} />
        <Route path="/npm-package" component={Blog3} />
        <Route path="/placement-guide" component={Blog4} />
        <Route path="/placement-experience" component={Blog5} />
        {/* <Route path="/" component={LoginPage} /> */}
        <Route path="/placements/article" component={Reviews} exact={true}/>
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
