import React from 'react';
import { connect } from 'react-redux';
import {FatpapersListItem} from './FatpapersListItem';
import selectCat1papers from '../selectors/cat1papers';

export class FatpapersList extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div className="content-container">
                {this.props.fatpapers.map((fatpaper) => {
                    return <FatpapersListItem 
                            key={fatpaper.id}
                            fatpaper={fatpaper} 
                        /> 
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fatpapers: selectCat1papers(state.fatpapers,state.filter),
        user_id: state.auth.uid
    };
};

export default connect(mapStateToProps)(FatpapersList);