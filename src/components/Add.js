import React from 'react';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { history } from '../routers/AppRouter';
import Modal from 'react-modal';

export class Add extends React.Component {

  constructor(props){
      super(props); 
      this.getUserCoins = this.getUserCoins.bind(this);
      this.openAboutUs = this.openAboutUs.bind(this);
      this.downloadTimer = this.downloadTimer.bind(this);
      this.closeDialog = this.closeDialog.bind(this);
      this.state = {
          coins: '',
          openStatus: false,
          timer: 10
      };
  }

  openAboutUs() {
      this.setState((prevState) => {
        return{
            openStatus: true
        };            
      });
      setTimeout(() => {
        this.setState({
          openStatus: false
        })
        database.ref(`users/${this.props.user_id}/`).update({ coins:this.state.coins + 30 });
        }, 10000);
  }

  closeDialog() {
    setTimeout(() => {
      this.setState({
        openStatus: false
      })
      }, 5000);
  }

  getUserCoins(){
    database.ref(`users/${this.props.user_id}/`).on('value', (snapshot) => {
      const val = snapshot.val().coins;
      this.setState((prevState) => {
        return{
            coins: val,
        };            
      });
    });    
  }

  downloadTimer() {
    setInterval(() => {
      if(this.state.timer>0){
        this.setState((prevState) => {
          return{
              timer: this.state.timer-1
          };            
        });
      }
     }, 1000);
  }
  
  
  componentDidMount() {
      this.getUserCoins();
      this.setState((prevState) => {
        return{
            openStatus: true
        };            
      });
      setTimeout(() => {
        this.setState({
          openStatus: false
        });
        database.ref(`users/${this.props.user_id}/`).update({ coins:this.state.coins + 30 });
        history.goBack();
        }, 13000);
      this.downloadTimer();
  };
  
  render() {
      return(       
        <span className="dropdown-pic">            
            {
              this.state.timer!=0 ? 
              <Modal className="modal-new" closeTimeoutMS={400} isOpen={this.state.openStatus} handleClose={this.closeDialog} contentLabel="Add">
                <img src="./images/add.png" height="100%" width='auto' className="add-modal"/>
                <font style={{position:'fixed',bottom:'1em',right:'1em',color:'black',fontWeight:'700'}}>Time Remaining:{this.state.timer}</font>
              </Modal>
              :
              <Modal className="modal-new" closeTimeoutMS={400} isOpen={this.state.openStatus} handleClose={this.closeDialog} contentLabel="Add">
                <img src="./images/final-vh-coins.gif" height="100%" width='auto' className="add-modal"/>
                <font style={{position:'fixed',bottom:'1em',right:'1em',color:'black',fontWeight:'700'}}>Time Remaining:{this.state.timer}</font>
              </Modal>
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Add);