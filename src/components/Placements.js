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
import { Link } from 'react-router-dom';
import { PlacementsListItem } from './PlacementsListItem';

const Placements = (props) => (
  <div>
    <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <div className="placement-container__rowDisplay">
      <div className="placement-content-container">
        <PlacementsThreeLiner id={props.placements[0].id} placement={props.placements[0]}/>
        <PlacementsThreeLiner id={props.placements[8].id} placement={props.placements[8]}/>
        <PlacementsThreeLiner id={props.placements[2].id} placement={props.placements[2]}/>
      </div>
      <div className="placement-container__tips">
        <div className="placement-container__tips-header">Frequently asked questions by companies</div>
        <div className="placement-container__tips-content">
          <div>1. Many companies ask for Dynamic Programming questions. So practice as many questions as possible.</div>
          <div>2. DBMS is again a hot topic. So be thorough with the basic SQL syntax. (JOIN is important) </div>
          <div>3. To read more important topics click on this link - <Link to="/placements/topics" style={{color:'#84d0d0'}}><b>Topics</b></Link></div>
        </div>
      </div>
    </div>
    <div className="placement-container__rowDisplay" style={{marginBottom:'50px'}}>
      <div className="placement-content-container">
        <PlacementsThreeLiner id={props.placements[3].id} placement={props.placements[3]}/>
        <PlacementsThreeLiner id={props.placements[7].id} placement={props.placements[7]}/>
        <PlacementsThreeLiner id={props.placements[5].id} placement={props.placements[5]}/>
        <div className="show-for-desktop placements-dotted">
          <div style={{display:'flex',justifyContent:'center'}}>
            _________________
            <Link to="/placements/article" className="button_review-tags">View All Reviews</Link>
            _________________
          </div>
        </div>
        <div className="placements-dotted-mobile">
          <div style={{display:'flex',justifyContent:'center'}}>
            <Link to="/placements/article" className="button_review-tags">View All Reviews</Link>
          </div>
        </div>
      </div>
      <div className="placement-container__tips">
        <div className="placement-container__tips-header">Important Links</div>
        <div className="placement-container__tips-content">
          <div>&#x25BA;<b>Advice- </b>To read advice rom your seniors. <Link to="/placements/resources" style={{color:'#84d0d0'}}>Click here!</Link></div>
          <div>&#x25BA;<b>Resources- </b>Get links to the resources by clicking <Link to="/placements/resources" style={{color:'#84d0d0'}}>here.</Link></div>
          <div>&#x25BA;<b>Important Topics- </b>Read about the frequently questions asked by the companies and what all points to focus on. <Link to="/placements/topics" style={{color:'#84d0d0'}}>Click here!</Link></div>
          <div>&#x25BA;<b>Rules and Regulations- </b>Know about the important rules imposed by Placement Cell. <Link to="/placements/pat" style={{color:'#84d0d0'}}>Click here!</Link></div>
        </div>
      </div>
    </div>
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