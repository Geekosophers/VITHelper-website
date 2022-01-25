import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const NotFoundPage = () => (
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
      <p className="not-found-page__content"><b>404 - PAGE NOT FOUND</b></p>
      <img src="/images/404.gif" alt="404" loop="infinite"/>
      <div className="not-found-page__content">Looks like you are in the wrong place.</div>
      <div className="not-found-page__content">Don't worry</div>
      <Link to="/"><button className="button">Click here to go back!</button></Link>
      <Footer/>
  </div>
  </div> 
);

export default NotFoundPage;