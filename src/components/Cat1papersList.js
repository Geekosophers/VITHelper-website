import React from 'react';
import { connect } from 'react-redux';
import {Cat1papersListItem} from './Cat1papersListItem';
import database from '../firebase/firebase';
import selectCat1papers from '../selectors/cat1papers';
import { startAddCat1User } from '../actions/users';


export class Cat1papersList extends React.Component {

    constructor(props){
        super(props); 
        this.unlockedPapersList = this.unlockedPapersList.bind(this);
        this.state = {
            unlockList: []
        };
    }

    unlockedPapersList(){
        database.ref(`users/${this.props.user_id}/cat1papers`)
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
            for (var i = 0, len = unlocked.length; i < len; i++) {
                unlockedPaperList.push(unlocked[i].cat1paper_id);
            }
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
                {this.props.cat1papers.map((cat1paper) => {
                    return this.state.unlockList.includes(cat1paper.unique_id) 
                        ? 
                        <Cat1papersListItem 
                            key={cat1paper.id}
                            unlocked = {true} 
                            cat1paper={cat1paper} 
                            user_id={this.props.user_id} 
                            unlockedPapers = {this.state.unlockedPapersList}
                            onSubmit={(user) => {
                                this.props.dispatch(startAddCat1User(user));
                            }}    
                        />
                        :
                        <Cat1papersListItem 
                            key={cat1paper.id}
                            unlocked = {false} 
                            cat1paper={cat1paper} 
                            user_id={this.props.user_id} 
                            unlockedPapers = {this.state.unlockedPapersList}
                            onSubmit={(user) => {
                                this.props.dispatch(startAddCat1User(user));
                            }}    
                        />; 
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