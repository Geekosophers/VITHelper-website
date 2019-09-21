import React from 'react';
import { connect } from 'react-redux';
import {MaterialsListItem} from './MaterialsListItem';
import selectMaterials from '../selectors/materials';
const MaterialsList = (props) => {
    return(
        <div className="content-container">
            <div className="list-header">
                <div>Materials</div>
            </div>
            {props.materials.map((material) => {
                return <MaterialsListItem key={material.id} material={material} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        materials: selectMaterials(state.materials,state.filter)
    };
};

export default connect(mapStateToProps)(MaterialsList);