import React from 'react';
import MatPaperButton from './MatPaperButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div><header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <img src="./images/header-font.png" height="50px" width="150px"/>
        </Link>
        <div>
          {/* {console.log(window.location.pathname=="/dashboard"? "yes": "no")} */}
          <span className="show-for-desktop">
            <Link to="/dashboard"><button className="button button--link" >{window.location.pathname=="/dashboard"? <u>Papers</u>:<span>Papers</span>}</button></Link> | 
            <Link to="/materials"><button className="button button--link" >{window.location.pathname=="/materials"? <u>Materials</u>:<span>Materials</span>}</button></Link> | 
          </span>
          <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header><MatPaperButton /></div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);