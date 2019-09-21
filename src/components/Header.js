import React from 'react';
import {MatPaperButton} from './MatPaperButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/cat2papers">
          <img src="./images/header-font.png" height="50px" width="150px"/>
        </Link>
        <div>
          {/* {console.log(window.location.pathname=="/dashboard"? "yes": "no")} */}
          <span className="show-for-desktop">
            {/* <button className="button button--link">Papers</button> | */}
            <div className="dropdown button button--link">Papers  <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
              <div className="dropdown-content">
                <Link to="/cat1papers" className="button button--link">CAT-1</Link>
                <Link to="/cat2papers" className="button button--link">CAT-2</Link>
                <Link to="/fatpapers" className="button button--link">FAT</Link>
              </div>
            </div> |
            {/* <Link to="/cat1papers" className="button button--link">{window.location.pathname=="/cat1papers"? <u>CAT-1 Papers</u>:<span>CAT-1 Papers</span>}</Link> |  */}
            <Link to="/materials" className="button button--link">{window.location.pathname=="/materials"? <u>Materials</u>:<span>Materials</span>}</Link> | 
          </span>
          <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </div>
    </header>
  <MatPaperButton />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);