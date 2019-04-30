import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filter';

const TeachersListFilter = (props) => (
    <div>
        <input type="text" value={props.filter.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
    </div>
);

const stateMapToProps = (state) => {
    return{
        filter: state.filter
    };
};

export default connect(stateMapToProps)(TeachersListFilter);