import React from 'react';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Modal from 'react-modal';

export class Info extends React.Component {

  constructor(props){
      super(props); 
      this.getUserCoins = this.getUserCoins.bind(this);
      this.openAboutUs = this.openAboutUs.bind(this);
      this.closeDialog = this.closeDialog.bind(this);
      this.state = {
          coins: '',
          openStatus: false
      };
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
  componentDidUpdate() {
    
  }

  componentDidMount() {
      this.getUserCoins();
      // console.log('mounted');
  };
  
  render() {
      return(       
        <span className="dropdown-pic">
            {/* {console.log(this.state.openStatus)} */}
            {/* <Modal className="modal-new" closeTimeoutMS={400} isOpen={this.state.openStatus} handleClose={this.closeDialog} contentLabel="Add">
              <img src="./images/add.png" height="100%" width='auto' style={{display:'flex',justifyContent:'center'}}/>
            </Modal> */}
            
            {/* <button class="dropbtn-pic">Dropdown</button> */}
            {
              <img src={this.props.user_profPic} style={{borderRadius:'50%',border:'solid #84d0d0 2px'}} height='45px' width='45px' />
              ||
              <img src='./images/user.png' style={{borderRadius:'50%',border:'solid #84d0d0 2px'}} height='45px' width='45px' />
            }
            <div className="dropdown-content-pic">
                <div>
                <span style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <span>
                    {<img src='../../images/circle-cropped.png' style={{borderRadius:'50%', border:'solid 1px #D4AF37'}} height='20px' width='20px' /> || <img src='./images/circle-cropped.png' style={{borderRadius:'50%', border:'solid 1px #D4AF37'}} height='20px' width='20px' />}
                    <span style={{position: 'relative',top: '2px',fontSize:'$m-size'}}>  Coins: {this.state.coins}</span>
                  </span>
                  <Link to="/add" onClick={ (event) => event.preventDefault() } style={{cursor:'default'}}><span style={{cursor:'default'}}> <button className="button button-addCoins" style={{cursor:'default',outline:'none',border:'none'}}>+Add coins</button></span></Link>
                </span>
                </div>
                <div>
                  <Link to="faqs" style={{cursor:'pointer'}}>
                    {<img src='../../images/faq.png' style={{borderRadius:'50%'}} height='20px' width='20px' /> || <img src='./images/faq.png' style={{borderRadius:'50%'}} height='20px' width='20px' />}
                    <span style={{position: 'relative',top: '2px'}}>  FAQs</span>
                  </Link>
                </div>
                <div>
                  <Link to="about-us" style={{cursor:'pointer'}}>
                    {<img src='../../images/info.png' style={{borderRadius:'50%'}} height='20px' width='20px' /> || <img src='./images/info.png' style={{borderRadius:'50%'}} height='20px' width='20px' />}
                    <span style={{position: 'relative',top: '2px'}}>  About Us</span>
                  </Link>
                </div>
                <div onClick={this.props.startLogout}>
                {<img src='../../images/logout.png' height='20px' width='20px' /> || <img src='./images/logout.png' height='20px' width='20px' />}
                <span className="pointer" style={{position: 'relative',top: '2px'}}>  Logout</span>
                </div>
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