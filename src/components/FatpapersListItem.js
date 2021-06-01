import React from 'react';
import { storage } from '../firebase/firebase';
import { connect } from 'react-redux';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';

export class FatpapersListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.unlockPaper = this.unlockPaper.bind(this);
        this.state = {
            count: false,
            coins: '',
            sufficient_coins: false,
            url:''
        };
    }  

    handleUrl(){
        const image = this.state;
        var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.fatpaper.file_name}.pdf`);
        gsReference.getDownloadURL().then(function(url) {
            image.url=url;
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
                this.setState((prevState) => {
                    return{
                        sufficient_coins: true,
                        coins: val.coins
                    };          
                });
                database.ref(`users/${this.props.user_id}/`).update({ coins:this.state.coins -  5 });
                this.props.onSubmit({
                    fatpaper_id: this.props.fatpaper.unique_id,
                });
            }
        }).catch((e) => {
            // console.log('Error fetching data',e);
        });
    }
    
    render(){
        return(
            <div>
                <div>{this.handleUrl()}</div>
                <div className="list-item"  onClick={this.handleComments}>
                    <div className="button2 button--link list_papers">
                        <div className="list_papers-name">{this.props.fatpaper.name[0]}</div>
                        <div className="list_papers-code">
                            <div className="list_papers-slot">{this.props.fatpaper.name[2] && <span>Slot -</span>} {this.props.fatpaper.name[2]}</div>
                            <div>{this.props.fatpaper.name[1]}</div>
                        </div>
                    </div>
                    <div className="doc-view__links"><a href={this.state.url} target="_blank"><button className="button">View Paper</button></a></div>
                </div>
            </div>
        );
    }
}
