import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <header className="show-for-mobile header">
      <div className="content-container">
        <div className="header__content" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div>
              <div className="header__title">
                {
                  window.location.pathname=="/cat1papers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
                  window.location.pathname=="/cat2papers"? <img src="./images/header-font.png" height="50px" width="150px"/> : null ||
                  window.location.pathname=="/fatpapers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
                  window.location.pathname=="/materials"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
                  window.location.pathname=="/placements"? <img src="./images/header-font.png" height="50px" width="150px"/>: <img src="../../images/header-font.png" height="50px" width="150px"/>
                }
              </div>
            </div>
        </div>
      </div>
    </header>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);