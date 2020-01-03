import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import PlacementsHeader from './PlacementsHeader';
import { connect } from 'react-redux';


const Advice = (props) => {
  // console.log(props.placement);
  return (
    <div>
      Hello
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Advice);