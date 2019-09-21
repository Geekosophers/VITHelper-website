import React from 'react';
import { connect } from 'react-redux';
import {Cat2papersListItem} from './Cat2papersListItem';
import selectCat2papers from '../selectors/cat2papers';
const Cat2papersList = (props) => {
    return(
        <div className="content-container">
            <div className="list-header">
                <div>Cat-2 Papers</div>
            </div>
            {props.cat2papers.map((cat2paper) => {
                return <Cat2papersListItem key={cat2paper.id} cat2paper={cat2paper} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cat2papers: selectCat2papers(state.cat2papers,state.filter)
    };
};

export default connect(mapStateToProps)(Cat2papersList);