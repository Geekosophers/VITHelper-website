import React from 'react';
import { Link } from 'react-router-dom';

const PlacementsThreeLiner = (props) => (
  <Link to={`/placements/article/${props.id}`}>
    <div className="placement-container">
        <div className="placement-container__text">
        <div className="placement-container__name">{props.placement.companyName}</div>
        <div><b>Description: </b>{props.placement.description.substring(0,165)}...</div>
        </div>
        <div><img src="./images/placements/societe-generale.png" height="100px" width="100px" alt="logo" /></div>
    </div>
  </Link>
);

export default PlacementsThreeLiner;