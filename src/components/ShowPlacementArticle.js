import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import { connect } from 'react-redux';


const ShowPlacementArticle = (props) => {
  console.log(props.placement);
  return (
    <div>
      <Header />
      <MatPaperButton />
      <div><b>Name: </b>{props.placement.name}</div>
      <div><b>Company Name: </b>{props.placement.companyName}</div>
      <div><b>Package: </b>{props.placement.packages}</div>
      <div><b>CGPA: </b>{props.placement.cgpa}</div>
      <div><b>Your Branch: </b>{props.placement.branch}</div>
      <div><b>Number of rounds that were conducted: </b>{props.placement.noOfRounds}</div>
      <div><b>Please describe all the individual rounds: </b></div>
      <div>{props.placement.individualDescription[0]}</div>
      <div>{props.placement.individualDescription[1]}</div>
      <div>{props.placement.individualDescription[2]}</div>
      <div>{props.placement.individualDescription[3]}</div>
      <div>{props.placement.individualDescription[4]}</div>
      <div>{props.placement.individualDescription[5]}</div>
      <div>{props.placement.individualDescription[6]}</div>
      <div>{props.placement.individualDescription[7]}</div>
      <div>{props.placement.individualDescription[8]}</div>
      <div>{props.placement.individualDescription[9]}</div>
      <div><b>How did you prepare for the company? Please provide any resource that can be useful for the readers: </b>{props.placement.preparation}</div>
      <div><b>Date of selection: </b>{props.placement.date}</div>
      <div><b>Any generic advice: </b>{props.placement.advice}</div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements.find((placement) => placement.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ShowPlacementArticle);