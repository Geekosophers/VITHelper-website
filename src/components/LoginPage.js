import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
<div>
  <h1 className="box-layout__title">VIT Helper</h1>
  <p>VIT Helper is aimed to provide you with all the information 
          you need to keep you all going...</p>
  <button className="button" onClick={startLogin}>Login with Google</button>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
