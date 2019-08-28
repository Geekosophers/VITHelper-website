import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
<div className="box-layout"> 
  <header className="header">
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
      {/* <h1>Question Papers</h1> */}
      <img src="/images/logo.png" height="200px" width="200px" alt="VIT Helper Logo" />
      {/* <p>VITHelper is aimed to provide you with all the information you need to keep going...</p> */}
      <p></p>
      {/* <button className="button" onClick={startLogin}>Login with Google</button> */}
      <p></p>
      <p><i>Hello Human! We hope that your CATs went well. Wish you luck for the semester.
<div>It's time for a break. We will be back with more features soon...</div></i></p>
      <div>Powered By- <a href="https://www.instagram.com/renati_official/" target="_blank"><span className="login-font">RENATI</span></a> <sup><i style={{fontSize:"12px"}} className="fa">&#xf08e;</i></sup></div>
    </div>
  </div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);


{/* <p><b><i>Find the right faculty for you!</i></b></p> */}
      {/* <p><i>Hello Human! We hope that your Course Registration went well and you got all the desired teachers. Thankyou for becoming a part of the success of VITHelper. Wish you luck for the semester.
VITHelper - Faculty Review was a part of the big project. We have got a lot more for you coming soon...</i></p> */}

{/* <hr /> */}
      {/* <span>For Freshers 2k19 - </span>
      <a href="faqs.html"><button className="button" >FAQs</button></a> */}