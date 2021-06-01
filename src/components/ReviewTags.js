import React from 'react';
import { connect } from 'react-redux';
import selectPlacements from '../selectors/placements';
import { Link } from 'react-router-dom';

const ReviewTags = (props) => (
  <div>
    <div className="placement-container__rowDisplay">
      <div className="placement-content-container">
        <Link to={`/placements/article/${props.placements[0].id}`}><button className="button_review-tags">{props.placements[0].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[1].id}`}><button className="button_review-tags">{props.placements[1].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[2].id}`}><button className="button_review-tags">{props.placements[2].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[3].id}`}><button className="button_review-tags">{props.placements[3].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[4].id}`}><button className="button_review-tags">{props.placements[4].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[5].id}`}><button className="button_review-tags">{props.placements[5].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[6].id}`}><button className="button_review-tags">{props.placements[6].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[7].id}`}><button className="button_review-tags">{props.placements[7].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[8].id}`}><button className="button_review-tags">{props.placements[8].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[9].id}`}><button className="button_review-tags">{props.placements[9].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[10].id}`}><button className="button_review-tags">{props.placements[10].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[11].id}`}><button className="button_review-tags">{props.placements[11].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[12].id}`}><button className="button_review-tags">{props.placements[12].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[13].id}`}><button className="button_review-tags">{props.placements[13].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[14].id}`}><button className="button_review-tags">{props.placements[14].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[15].id}`}><button className="button_review-tags">{props.placements[15].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[16].id}`}><button className="button_review-tags">{props.placements[16].companyName}</button></Link>
        <Link to={`/placements/article/${props.placements[17].id}`}><button className="button_review-tags">{props.placements[17].companyName}</button></Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
      placements: selectPlacements(state.placements,state.filter)
  };
};

export default connect(mapStateToProps)(ReviewTags);