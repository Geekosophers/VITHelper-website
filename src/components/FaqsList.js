import React from 'react';
import { connect } from 'react-redux';
import {FaqsListItem} from './FaqsListItem';
import selectFaqs from '../selectors/faqs';
const FaqsList = (props) => {
    return(
        <div className="content-container">
            {/* <div className="list-header">
                <div>Faqs</div>
            </div> */}
            {/* {console.log(props)} */}
            {props.faqs.map((faq) => {
                return <FaqsListItem key={faq.id} faq={faq} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        faqs: selectFaqs(state.faqs,state.filter)
    };
};

export default connect(mapStateToProps)(FaqsList);