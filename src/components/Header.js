import React from 'react';
import {MatPaperButton} from './MatPaperButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <header className="show-for-desktop header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          {
            window.location.pathname=="/cat1papers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
            window.location.pathname=="/cat2papers"? <img src="./images/header-font.png" height="50px" width="150px"/> : null ||
            window.location.pathname=="/fatpapers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
            window.location.pathname=="/materials"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
            window.location.pathname=="/placements"? <img src="./images/header-font.png" height="50px" width="150px"/>: <img src="../../images/header-font.png" height="50px" width="150px"/>
          }
        </Link>
        <div>
          <span className="show-for-desktop">
            <span className="dropdown">
              {
                window.location.pathname=="/cat1papers" || 
                window.location.pathname=="/cat2papers" || 
                window.location.pathname=="/fatpapers"
                ? 
                <span className="header-button header-button--link-u">
                  Papers
                  <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'black'}}></i>
                </span>
                :
                <span className="header-button header-button--link">
                  Papers
                  <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
                </span>
              }
              <div className="dropdown-content">
                <Link to="/cat1papers" className="button button--link">CAT-1</Link>
                <Link to="/cat2papers" className="button button--link">CAT-2</Link>
                <Link to="/fatpapers" className="button button--link">FAT</Link>
              </div>
            </span>
            <Link to="/materials">{window.location.pathname=="/materials"? <span className="header-button header-button--link-u">Materials</span>:<span className="header-button header-button--link">Materials</span>}</Link>
            <Link to="/placements">
              {
                window.location.pathname!=="/materials" &&
                window.location.pathname!=="/cat1papers" &&
                window.location.pathname!=="/cat2papers" &&
                window.location.pathname!=="/fatpapers" &&
                <span className="header-button header-button--link-u">Placements</span> ||
                <span className="header-button header-button--link">Placements</span>
              }
            </Link> 
          </span>
        </div>
      </div>
    </div>
    </header>
  {/* <MatPaperButton /> */}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);