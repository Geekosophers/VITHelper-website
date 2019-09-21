import React from 'react';
import { connect } from 'react-redux';
import {FatpapersListItem} from './FatpapersListItem';
import selectFatpapers from '../selectors/fatpapers';
const FatpapersList = (props) => {
    return(
        <div className="content-container">
            <div className="list-header">
                <div>FAT Papers</div>
            </div>
            {props.fatpapers.map((fatpaper) => {
                return <FatpapersListItem key={fatpaper.id} fatpaper={fatpaper} />; 
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        fatpapers: selectFatpapers(state.fatpapers,state.filter)
    };
};

export default connect(mapStateToProps)(FatpapersList);