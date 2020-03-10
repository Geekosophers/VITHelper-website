import React from 'react';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Info extends React.Component {

    constructor(props){
        super(props); 
        this.getUserCoins = this.getUserCoins.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleState = this.handleState.bind(this);
        this.state = {
            coins: '',
            count: 2
        };
    }

    handleClick(e) {
        this.setState((prevState) => {
            return{
                count:(this.state.count+1)%2
            };            
        });
    }

    handleState(e) {
        this.setState((prevState) => {
            return{
                count: 2
            };            
        });
    }

    getUserCoins(){
        database.ref(`users/${this.props.user_id}/`).on('value', (snapshot) => {
        const val = snapshot.val().coins;
        this.setState((prevState) => {
            return{
                coins: val
            };            
        });
        });    
    }

    componentDidMount() {
        this.getUserCoins()
    };
  
    render() {
        return(         
            <span >
                <div>
                <span className="show-for-mobile button-matpap__disp">
                    <div onClick={this.handleClick}>
                        {   
                            <img src={this.props.user_profPic} style={{borderRadius:'50%',border:'solid #84d0d0 2px'}} height='45px' width='45px' />
                            ||
                            <img src='./images/user.png' style={{borderRadius:'50%',border:'solid #84d0d0 2px'}} height='45px' width='45px' />
                        }
                    </div>
                </span>
                {this.state.count==1 &&
                    <div className="ham__nav-pic" onClick={this.handleState}>
                        <div className="button button--link"><u>User Info:</u></div>
                        <div className="button button--link-for-matheader">
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <span>
                                    <img src='./images/circle-cropped.png' style={{borderRadius:'50%', border:'solid 1px #D4AF37'}} height='20px' width='20px' />
                                    <span>  Coins: {this.state.coins}</span>
                                </span>
                                <span> <button className="button button-addCoins">+Add coins</button></span>
                            </div>
                        </div>
                        <div className="button button--link-for-matheader">
                            <div>
                                <img src='./images/faq.png' style={{borderRadius:'50%'}} height='20px' width='20px' />
                                <span>  FAQs</span>
                            </div>
                        </div>
                        <div className="button button--link-for-matheader">
                            <div>
                                <img src='./images/info.png' style={{borderRadius:'50%'}} height='20px' width='20px' />
                                <span> About Us</span>
                            </div>
                        </div>
                        <div className="button button--link-for-matheader">
                            <div>
                                <img src='./images/logout.png' height='20px' width='20px' />
                                <span onClick={this.props.startLogout}> Logout</span>
                            </div>
                        </div>
                    </div>
                }
                {this.state.count==0 &&
                    <div className="ham__nav1-pic">
                        <div className="button button--link"><u>User Info:</u></div>
                        <div className="button button--link-for-matheader">
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <span>
                                    <img src='./images/circle-cropped.png' style={{borderRadius:'50%', border:'solid 1px #D4AF37'}} height='20px' width='20px' />
                                    <span>  Coins: {this.state.coins}</span>
                                </span>
                                <span> <button className="button button-addCoins">+Add coins</button></span>
                            </div>
                        </div>
                        <div className="button button--link-for-matheader">
                            <div>
                                <img src='./images/faq.png' style={{borderRadius:'50%'}} height='20px' width='20px' />
                                <span>  FAQs</span>
                            </div>
                        </div>
                        <div className="button button--link-for-matheader">
                            <div>
                                <img src='./images/info.png' style={{borderRadius:'50%'}} height='20px' width='20px' />
                                <span> About Us</span>
                            </div>
                        </div>
                        <div className="button button--link-for-matheader">
                            <div>
                                <img src='./images/logout.png' height='20px' width='20px' />
                                <span onClick={this.props.startLogout}> Logout</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
            </span> 
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => {
  return {
    user_profPic: firebase.auth().currentUser.photoURL,
    user_id: firebase.auth().currentUser.uid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);