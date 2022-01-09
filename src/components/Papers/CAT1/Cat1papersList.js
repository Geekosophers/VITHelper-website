import React from 'react';
import { connect } from 'react-redux';
import {Cat1papersListItem} from './Cat1papersListItem';
import selectCat1papers from '../../../selectors/cat1papers';

export class Cat1papersList extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div className="content-container">
                {this.props.cat1papers.map((cat1paper) => {
                    return <Cat1papersListItem 
                            key={cat1paper.id}
                            cat1paper={cat1paper} 
                        /> 
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cat1papers: selectCat1papers(state.cat1papers,state.filter),
        user_id: state.auth.uid
    };
};

export default connect(mapStateToProps)(Cat1papersList);