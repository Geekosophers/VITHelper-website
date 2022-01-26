import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import MatPaperButton from '../Materials/MatPaperButton';
import Footer from '../Footer';


const Blogs = (props) => {
  return (
    <div>
      <Header />
      <MatPaperButton />
      <Link to="/hostel-vacating-procedure">Hostel Vacating Procedure</Link>
      <Link to="/room-counselling">Hostel Room Counselling</Link>
      <Footer/>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Blogs);