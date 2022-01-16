import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import Header from '../Header/Header';
import MatPaperButton from '../Materials/MatPaperButton';

export const LoginPage = ({ startLogin }) => (
<div className="box-layout box-layout-bg"> 
  <Header />
  <MatPaperButton />
  <div style={{color:'white',backgroundColor:'#B0E0E6',display:'flex',justifyContent:'center'}}>Welcome to VITHelper</div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);