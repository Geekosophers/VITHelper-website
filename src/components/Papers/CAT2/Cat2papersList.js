import React from 'react';
import { connect } from 'react-redux';
import {Cat2papersListItem} from './Cat2papersListItem';
import selectCat2papers from '../../../selectors/cat2papers';

export class Cat2papersList extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div className="content-container">
                {this.props.cat2papers.map((cat2paper) => {
                    return <Cat2papersListItem 
                            key={cat2paper.id}
                            cat2paper={cat2paper} 
                        /> 
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cat2papers: selectCat2papers(state.cat2papers,state.filter),
        user_id: state.auth.uid
    };
};

export default connect(mapStateToProps)(Cat2papersList);