import React from 'react';
import { connect } from 'react-redux';

const PlacementsListFilter = (props) => (
    <div className="content-container">
        <div className="placement-container">
            <div className="placement-container__2">Have a story to tell?</div>
            <div className="placement-container__3">We would love to hear</div>  
            <button className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScTp6NuqYDVImTWI4i_C9u5Hp7Hi7wTajNj_zAqh6FOcn1Lpg/viewform?usp=sf_link">Begin your tale</a></button>
        </div>
    </div>    
);

const stateMapToProps = (state) => {
    return{
        filter: state.filter
    };
};

export default connect(stateMapToProps)(PlacementsListFilter);