import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import { Link } from 'react-router-dom';

export const LoginPage = ({ startLogin }) => (
<div className="box-layout box-layout-bg"> 
  <Header />
  <MatPaperButton />
  {/* <header className="show-for-desktop header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__title">
          <h1>VITHelper</h1>
        </div>
      </div>
    </div>
  </header>
  <div className="box-layout__justifycontent">
    <div className="box-layout__box box-layout__maxwidth">
      <h2 style={{fontFamily:'Merriweather, serif',fontSize:'2.4rem'}}>Keep Learning. Keep Growing.</h2>
      <img src="/images/logo.png" alt="VIT Helper" className="w3-container w3-center w3-animate-opacity" />
      {/* <iframe src="/images/loader.html" height="90%" width="90%" style={{border:'none'}}></iframe> */}
      {/* <p>VITHelper is aimed to provide you with all the information you need to keep going...</p> */}
      {/* <p></p> */}
      {/* <Link to="/placements"><button className="button">Login</button></Link> */}
      {/* <button className="button" onClick={ startLogin}>Login with Google</button> */}
      {/* <p></p> */}
      {/* <div><i>Hello Human! We hope that your CATs went well. Wish you luck for the semester.
<div>It's time for a break. We will be back with more features soon...</div></i></div> */}
      {/* <a href="canvas.html"><button>Go To New Login</button></a> */}
      {/* <div>Powered By- <a href="https://www.instagram.com/renati_official/" target="_blank"><span className="login-font">RENATI</span></a> <sup><i style={{fontSize:"12px"}} className="fa">&#xf08e;</i></sup></div> */}
      {/* <div>Hello</div> */}
    {/* </div> */}
  {/* </div> */}
  <div style={{color:'white',backgroundColor:'#B0E0E6',display:'flex',justifyContent:'center'}}>Welcome to VITHelper</div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);