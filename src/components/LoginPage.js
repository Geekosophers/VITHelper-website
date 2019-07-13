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
      <img src="/images/logo.png" height="120px" alt="VIT Helper Logo" />
      {/* <p>VIT Helper is aimed to provide you with all the information you need to keep going...</p> */}
      {/* <p><b><i>Find the right faculty for you!</i></b></p> */}
      
      <p><i>Hello Human! We hope that your Course Registration went well and you got all the desired teachers. Thankyou for becoming a part of the success of VITHelper. Wish you luck for the semester.
VITHelper - Faculty Review was a part of the big project. We have got a lot more for you coming soon...</i></p>
      {/* <button className="button" onClick={startLogin}>Login with Google</button> */}
      {/* <hr /> */}
      {/* <span>For Freshers 2k19 - </span> */}
      {/* <a href="faqs.html"><button className="button" >FAQs</button></a> */}
    </div>
  </div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
