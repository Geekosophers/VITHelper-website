import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
<div> 
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__title">
          <h1>VITHelper</h1>
        </div>
      </div>
    </div>
  </header>
  <div className="box-layout">
    <div className="box-layout__box">
      <h1>Faculty Review</h1>
      <img src="/images/logo.png" alt="VIT Helper Logo" />
      <p>VIT Helper is aimed to provide you with all the information 
              you need to keep you going...</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
