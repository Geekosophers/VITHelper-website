import React from 'react';
import { connect } from 'react-redux';
import {Cat2papersListItem} from './Cat2papersListItem';
import database from '../firebase/firebase';
import selectCat2papers from '../selectors/cat2papers';
import { startAddCat2User } from '../actions/users';


export class Cat2papersList extends React.Component {

    constructor(props){
        super(props); 
        this.unlockedPapersList = this.unlockedPapersList.bind(this);
        this.state = {
            unlockList: []
        };
    }

    unlockedPapersList(){
        database.ref(`users/${this.props.user_id}/cat2papers`)
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
            // this.unlockedPapersList.push(unlocked[0].cat2paper_id)
            for (var i = 0, len = unlocked.length; i < len; i++) {
                unlockedPaperList.push(unlocked[i].cat2paper_id);
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
            {this.props.cat2papers.map((cat2paper) => {
                return this.state.unlockList.includes(cat2paper.unique_id) 
                    ? 
                    <Cat2papersListItem 
                        key={cat2paper.id}
                        unlocked = {true} 
                        cat2paper={cat2paper} 
                        user_id={this.props.user_id} 
                        unlockedPapers = {this.state.unlockedPapersList}
                        onSubmit={(user) => {
                            this.props.dispatch(startAddCat2User(user));
                        }}    
                    />
                    :
                    <Cat2papersListItem 
                        key={cat2paper.id}
                        unlocked = {false} 
                        cat2paper={cat2paper} 
                        user_id={this.props.user_id} 
                        unlockedPapers = {this.state.unlockedPapersList}
                        onSubmit={(user) => {
                            this.props.dispatch(startAddCat2User(user));
                        }}    
                    />; 
                })
            }
        </div>
        );
    }
}

// const Cat1papersList = (props) => {
//     return(
//         <div className="content-container">
//             {/* <div className="list-header">
//                 <div>Cat-1 Papers</div>
//             </div> */}
//             {props.cat1papers.map((cat1paper) => {
//                 return <Cat1papersListItem 
//                             key={cat1paper.id} 
//                             cat1paper={cat1paper} 
//                             user_id={props.user_id} 
//                             onSubmit={(user) => {
//                                 props.dispatch(startAddCat1User(user));
//                             }}    
//                         />; 
//             })}
//         </div>
//     );
// };

const mapStateToProps = (state) => {
    return {
        cat2papers: selectCat2papers(state.cat2papers,state.filter),
        user_id: state.auth.uid
    };
};

export default connect(mapStateToProps)(Cat2papersList);