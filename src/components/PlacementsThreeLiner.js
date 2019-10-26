import React from 'react';
import { Link } from 'react-router-dom';

const PlacementsThreeLiner = (props) => (
  <Link to={`/placements/article/${props.id}`}>
    <div className="placement-container">
        <div className="placement-container__text">
          <div className="placement-container__name">
            {props.placement.companyName}
            {window.location.pathname=="/placements"?<span style={{fontSize:'1.2rem'}}>(Review)</span>:null}
          </div>
          <div><b>Description: </b>{props.placement.description.substring(0,165)}...</div>
        </div>
        <div className="show-for-desktop"><img src={`../images/placements/${props.placement.companyName}.png`} height="100px" width="100px" alt="logo" /></div>
        <div className="show-for-mobile"><img src={`../images/placements/${props.placement.companyName}.png`} height="60px" width="60px" alt="logo" /></div>
    </div>
  </Link>
);

export default PlacementsThreeLiner;