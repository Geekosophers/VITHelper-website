import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="content-container not-found-page">
    {/* <div className="not-found-page-box"> */}
      <img src="/images/404.gif" alt="404" loop="infinite"/>
      <p>Looks like you are in the wrong place. Don't worry</p>
      <Link to="/"><button className="button">Click here to go back!</button></Link>
    {/* </div> */}
  </div>
);

export default NotFoundPage;
