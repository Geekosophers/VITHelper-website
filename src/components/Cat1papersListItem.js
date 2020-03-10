import React from 'react';
import { storage } from '../firebase/firebase';
import { connect } from 'react-redux';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';

export class Cat1papersListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.unlockPaper = this.unlockPaper.bind(this);
        // this.unlockedPapersList = this.unlockedPapersList.bind(this);
        this.state = {
            count: false,
            coins: '',
            sufficient_coins: false,
            url:''
        };
    }  

    // unlockedPapersList(){
    //     database.ref(`users/aOj8Sg9E0lRsJKNT4PIf7NmvfAL2/cat1papers`)
    //     .once('value')
    //     .then((snapshot) => {
    //         const unlocked = [];

    //         snapshot.forEach((childSnapshot) => {
    //             unlocked.push({
    //                 id: childSnapshot.key,
    //                 ...childSnapshot.val()
    //             });
    //         });

    //         console.log(unlocked);
    //     });
    // }

    handleUrl(){
        const image = this.state;
        var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.cat1paper.file_name}.pdf`);
        gsReference.getDownloadURL().then(function(url) {
            image.url=url;
            // console.log("url"+image.url);
          });
    }

    handleComments(e) {
        this.setState((prevState) => {
            return{
                count:!this.state.count
            };            
        });
    }

    unlockPaper = (e) => {
        e.preventDefault();

        database.ref(`users/${this.props.user_id}/`)
        .once('value')
        .then((snapshot) => {
            const val = snapshot.val();
            if(val.coins>=5){
                // console.log('yes');
                this.setState((prevState) => {
                    return{
                        sufficient_coins: true,
                        coins: val.coins
                    };          
                });
                database.ref(`users/${this.props.user_id}/`).update({ coins:this.state.coins -  5 });
                this.props.onSubmit({
                    cat1paper_id: this.props.cat1paper.unique_id,
                });
            }
        }).catch((e) => {
            // console.log('Error fetching data',e);
        });

        // console.log(this.props.cat1paper.id);
        // console.log(this.props.user_id);
        // console.log(this.props);
        
        // store.dispatch(startAddPaper({ cat1papers: }));
        // store.dispatch(startAddCat1paper({ name: ['name','code','slot'],file_name:'404',lock_status:1}))
    }
    
    render(){
        return(
            <div>
                <div>{this.handleUrl()}</div>
                <div className="list-item"  onClick={this.handleComments}>
                    <div className="button2 button--link list_papers">
                        <div className="list_papers-name">{this.props.cat1paper.name[0]}</div>
                        <div className="list_papers-code">
                            <div className="list_papers-slot">{this.props.cat1paper.name[2] && <span>Slot -</span>} {this.props.cat1paper.name[2]}</div>
                            <div>{this.props.cat1paper.name[1]}</div>
                        </div>
                    </div>
                    {/* {(this.state.sufficient_coins==true || this.props.unlocked==true)
                        ?
                        <div className="doc-view__links"><a href={this.state.url} target="_blank"><button className="button">View Paper</button></a></div>
                        :
                        <a onClick={this.unlockPaper}><button className="button">Unlock Paper</button></a>
                    } */}
                    <div className="doc-view__links"><a href={this.state.url} target="_blank"><button className="button">View Paper</button></a></div>
                </div>
            </div>
        );
    }
}

// class Cat1paperComment extends React.Component {

//     constructor(props){
//         super(props); 
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             url: ''
//         };
//     }

//     handleChange(e) {
//         const image = this.state;
//         var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.commentText}.pdf`);
//         gsReference.getDownloadURL().then(function(url) {
//             image.url=url;
//             // console.log("url"+image.url);
//           });
//     }

    

//     render() {
//         return(
            
//         );
//     }
// }
