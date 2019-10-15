import React from 'react';
import PlacementsList from './PlacementsList';
import PlacementsListFilter from './PlacementsListFilter';
import WhatsApp from './WhatsApp';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import PlacementsThreeLiner from './PlacementsThreeLiner';
import { connect } from 'react-redux';
import selectPlacements from '../selectors/placements';
import ShareButton from './ShareButton';
import PlacementsHeader from './PlacementsHeader';
import { PlacementsListItem } from './PlacementsListItem';

const Placements = (props) => (
  <div>
    {/* <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <div className="placement-container__rowDisplay">
      <div className="placement-content-container">
        <PlacementsThreeLiner id={props.placements[0].id} placement={props.placements[0]}/>
        <PlacementsThreeLiner id={props.placements[1].id} placement={props.placements[1]}/>
        <PlacementsThreeLiner id={props.placements[2].id} placement={props.placements[2]}/>
      </div>
      <div className="placement-container__tips">
        <div className="placement-container__tips-header">Frequently asked questions by companies</div>
        <div className="placement-container__tips-content">
          <div>1. Many comanies ask for Dynamic Programming questions. So practice as many questions as possible.</div>
          <div>2. DBMS is again a hot topic. So be thorough with the basic synatx. (for eg- JOIN) </div>
          <div>1. Many comanies ask for Dynamic Programming questions. So practice as many questions as possible.</div>
        </div>
      </div>
    </div>
    <div className="content-container placement-container">
      <div className="placement-container__text">
        <div className="placement-container__name">Societe Generale</div>
        <div><b>Description: </b>Round-1: Coding Round (Pretty easy, cakewalk. There were 2 questions of 'Very easy' difficulty level. For MCQs you must be good at the basics of DBMS, DSA, Coding an...</div>
      </div>
      <div><img src="./images/placements/societe-generale.png" height="100px" width="100px" alt="logo" /></div>
    </div> */}
    
    {/* <PlacementsListFilter /> */}
    {/* <PlacementsList /> */}
    {/* <WhatsApp /> */}
    {/* <ShareButton /> */}
  </div>
);

// export default Placements;

const mapStateToProps = (state) => {
  return {
      placements: selectPlacements(state.placements,state.filter)
  };
};

export default connect(mapStateToProps)(Placements);