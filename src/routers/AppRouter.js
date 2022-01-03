import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
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
import PrivacyPolicy from '../components/PrivacyPolicy';
import Reviews from '../components/Reviews';
import Advice from '../components/Advice';
import PAT from '../components/PAT';
import HeaderForMobile from '../components/HeaderForMobile';
import Placements from '../components/Placements';
import ShowPlacementArticle from '../components/ShowPlacementArticle';
import Resources from '../components/Resources';
import Topics from '../components/Topics';
import CalculatorHome from '../components/CalculatorHome';
import GpaCalculator from '../components/GpaCalculator';
import AboutUsForMobile from '../components/AboutUsForMobile';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <HeaderForMobile />
      <Switch>
        <Route path="/" component={AboutUsForMobile} exact={true} />
        <Route path="/cat1papers" component={CAT1Papers} />
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
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/calculatorHome" component={CalculatorHome} />
        <Route path="/gpaCalculator" component={GpaCalculator}/>
        <Route path="/placements/article" component={Reviews} exact={true}/>
        <Route path="/placements/article/:id" component={ShowPlacementArticle} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;