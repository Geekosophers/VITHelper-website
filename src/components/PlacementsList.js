import React from 'react';
import { connect } from 'react-redux';
import {PlacementsListItem} from './PlacementsListItem';
import selectPlacements from '../selectors/placements';
const PlacementsList = (props) => {
    return(
        <div className="content-container">
            <div className="list-header">
                <div>Placements</div>
            </div>
            {props.placements.map((placement) => {
                return <PlacementsListItem key={placement.id} placement={placement} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        placements: selectPlacements(state.placements,state.filter)
    };
};

export default connect(mapStateToProps)(PlacementsList);