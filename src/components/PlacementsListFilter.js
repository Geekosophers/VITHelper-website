import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filter';

const PlacementsListFilter = (props) => (
    <div className="content-container">
        <div className="placement-container">
            {/* <div className="placement-container__1"> */}
                <div className="placement-container__2">Have a story to tell?</div>
                <div className="placement-container__3">We would love to hear</div>  
            {/* </div> */}
            <button className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScTp6NuqYDVImTWI4i_C9u5Hp7Hi7wTajNj_zAqh6FOcn1Lpg/viewform?usp=sf_link">Begin your tale</a></button>
        </div>
        {/* <h3>Search for Placement Article:</h3>
        <div className="input-group">
        <div className="input-group__item">
            <input 
                type="text" 
                className="text-input" 
                placeholder="Keyword"
                value={props.filter.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}/>
            </div>
        </div> */}
    </div>    
);

const stateMapToProps = (state) => {
    return{
        filter: state.filter
    };
};

export default connect(stateMapToProps)(PlacementsListFilter);