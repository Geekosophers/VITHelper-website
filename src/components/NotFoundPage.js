import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="content-container not-found-page">
    {/* <div className="not-found-page-box"> */}
      <p><b>404 - PAGE NOT FOUND</b></p>
      <img src="/images/404.gif" alt="404" loop="infinite"/>
      <div className="not-found-page__content">Looks like you are in the wrong place.</div>
      <div className="not-found-page__content">Don't worry</div>
      <Link to="/"><button className="button">Click here to go back!</button></Link>
    {/* </div> */}
  </div>
);

export default NotFoundPage;
