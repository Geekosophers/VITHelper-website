import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../../actions/filter';

const Cat1papersListFilter = (props) => (
    <div className="content-container">
        <h3>Search for Cat-1 Paper:</h3>
        <div className="input-group">
        <div className="input-group__item">
            <input 
                type="text" 
                className="text-input" 
                placeholder="Course Name/Code"
                value={props.filter.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}/>
            </div>
        </div>
    </div>    
);

const stateMapToProps = (state) => {
    return{
        filter: state.filter
    };
};

export default connect(stateMapToProps)(Cat1papersListFilter);