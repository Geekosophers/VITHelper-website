import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import PlacementsHeader from './PlacementsHeader';
import ReviewTags from './ReviewTags';
import { connect } from 'react-redux';

const ShowPlacementArticle = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <PlacementsHeader />
      <ReviewTags />
      <div className="content-container">
        <div className="placement-content-margin">
          <div className="placement-content-pic">
            <div>
              <div className="placement-container__name">{props.placement.companyName}</div>
              <div style={{lineHeight:'2.0'}}>
                <div><b>Number of rounds: </b>{props.placement.noOfRounds}</div>
                <div><b>Rounds Description: </b></div>
              </div>
            </div>
            <div>
              <div className="show-for-desktop"><img src={`../../images/placements/${props.placement.companyName}.png`} height="100px" width="100px" alt="logo" /></div>
              <div className="show-for-mobile"><img src={`../../images/placements/${props.placement.companyName}.png`} height="60px" width="60px" alt="logo" /></div>
            </div>
          </div>
          <div style={{fontFamily:'Merriweather, serif',lineHeight:'2.0'}}>
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
            <div>{props.placement.date && <b>Date of selection: </b>}{props.placement.date}</div>
            <div>{props.placement.advice && <span><b>Advice to the readers: </b>{props.placement.advice}</span>}</div>
            <div style={{color:'#84d0d0'}}>-{props.placement.name}, {props.placement.cgpa}, {props.placement.branch}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements.find((placement) => placement.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ShowPlacementArticle);