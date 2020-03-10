import React from 'react';
import FaqsList from './FaqsList';
import FaqsListFilter from './FaqsListFilter';
import WhatsApp from './WhatsApp';
import MatPaperButton from './MatPaperButton';
import Header from './Header';
import ShareButton from './ShareButton';
import { Link } from 'react-router-dom';

const Faqs = () => (
  <div>
    {window.scrollTo(0, 0)}
    {/* <Header /> */}
    {/* <MatPaperButton /> */}
    {/* <FaqsListFilter /> */}
    {/* <FaqsList /> */}
    {/* <WhatsApp /> */}
    {/* <ShareButton /> */}
    <div>
      <header className="show-for-desktop header">
        <div className="content-container">
          <div className="header__content">
            <div className="header__title">
              <h1>VITHelper</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="content-container not-found-page">
        {/* <div className="not-found-page-box"> */}
          <p className="not-found-page__content"><b>Work In Progress...</b></p>
          <img src="/images/work-in-progress.png" alt="Work In Progress..." loop="infinite"/>
          {/* <div className="not-found-page__content">Looks like you are in the wrong place.</div> */}
          {/* <div className="not-found-page__content">Don't worry</div> */}
          <Link to="/"><button className="button">Click here to go back!</button></Link>
        {/* </div> */}
      </div>
    </div>
  </div>
);

export default Faqs;