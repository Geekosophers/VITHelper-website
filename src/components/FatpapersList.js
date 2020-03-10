import React from 'react';
import { connect } from 'react-redux';
import {FatpapersListItem} from './FatpapersListItem';
import database from '../firebase/firebase';
import selectFatpapers from '../selectors/fatpapers';
import { startAddFatUser } from '../actions/users';


export class FatpapersList extends React.Component {

    constructor(props){
        super(props); 
        this.unlockedPapersList = this.unlockedPapersList.bind(this);
        this.state = {
            unlockList: []
        };
    }

    unlockedPapersList(){
        database.ref(`users/${this.props.user_id}/fatpapers`)
        .once('value')
        .then((snapshot) => {
            const unlocked = [];
            const unlockedPaperList = [];

            snapshot.forEach((childSnapshot) => {
                unlocked.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            // this.unlockedPapersList.push(unlocked[0].fatpaper_id)
            for (var i = 0, len = unlocked.length; i < len; i++) {
                unlockedPaperList.push(unlocked[i].fatpaper_id);
            }
            // console.log(unlockedPaperList);
            this.setState((prevState) => {
                return{
                    unlockList: unlockedPaperList
                };            
            });
        });
    }

    componentDidMount() {
        this.unlockedPapersList()
    };
    
    render() {
        return(
            <div className="content-container">
            {/* {console.log(this.props.user_id)} */}
            {/* {console.log(this.state.unlockedPaperList)} */}
            {this.props.fatpapers.map((fatpaper) => {
                return this.state.unlockList.includes(fatpaper.unique_id) 
                        ? 
                        <FatpapersListItem 
                            key={fatpaper.id}
                            unlocked = {true} 
                            fatpaper={fatpaper} 
                            user_id={this.props.user_id} 
                            unlockedPapers = {this.state.unlockedPapersList}
                            onSubmit={(user) => {
                                this.props.dispatch(startAddFatUser(user));
                            }}    
                        />
                        :
                        <FatpapersListItem 
                            key={fatpaper.id}
                            unlocked = {false} 
                            fatpaper={fatpaper} 
                            user_id={this.props.user_id} 
                            unlockedPapers = {this.state.unlockedPapersList}
                            onSubmit={(user) => {
                                this.props.dispatch(startAddFatUser(user));
                            }}    
                        />; 
            })}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fatpapers: selectFatpapers(state.fatpapers,state.filter),
        user_id: state.auth.uid
    };
};

export default connect(mapStateToProps)(FatpapersList);