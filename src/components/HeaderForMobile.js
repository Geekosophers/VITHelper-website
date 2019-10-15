import React from 'react';
import {MatPaperButton} from './MatPaperButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <header className="show-for-mobile header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          {
            window.location.pathname=="/cat1papers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
            window.location.pathname=="/cat2papers"? <img src="./images/header-font.png" height="50px" width="150px"/> : null ||
            window.location.pathname=="/fatpapers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
            window.location.pathname=="/materials"? <img src="./images/header-font.png" height="50px" width="150px"/>: null
            // window.location.pathname=="/placements"? <img src="./images/header-font.png" height="50px" width="150px"/>: <img src="../../images/header-font.png" height="50px" width="150px"/>
          }
        </Link>
        <div>
          <span className="show-for-desktop">
            <div className="dropdown button button--link">Papers  <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
              <div className="dropdown-content">
                <Link to="/cat1papers" className="button button--link">CAT-1</Link>
                <Link to="/cat2papers" className="button button--link">CAT-2</Link>
                <Link to="/fatpapers" className="button button--link">FAT</Link>
              </div>
            </div> |
            <Link to="/materials" className="button button--link">{window.location.pathname=="/materials"? <u>Materials</u>:<span>Materials</span>}</Link>
            {/* <Link to="/placements" className="button button--link">{window.location.pathname=="/placements"? <u>Placements</u>:<span>Placements</span>}</Link>  */}
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