import React from 'react';
import { connect } from 'react-redux';
import {Cat1papersListItem} from './Cat1papersListItem';
import selectCat1papers from '../selectors/cat1papers';
const Cat1papersList = (props) => {
    return(
        <div className="content-container">
            <div className="list-header">
                <div>Cat-1 Papers</div>
            </div>
            {props.cat1papers.map((cat1paper) => {
                return <Cat1papersListItem key={cat1paper.id} cat1paper={cat1paper} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cat1papers: selectCat1papers(state.cat1papers,state.filter)
    };
};

export default connect(mapStateToProps)(Cat1papersList);