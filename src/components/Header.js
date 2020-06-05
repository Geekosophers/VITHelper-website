import React from 'react';
import {MatPaperButton} from './MatPaperButton';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import Info from './Info';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
// import { database } from 'firebase';

export class Header extends React.Component {

  constructor(props){
      super(props); 
      // this.getUserCoins = this.getUserCoins.bind(this);
      this.state = {
          // coins: ''
          width: screen.width
      };
  }

  // getUserCoins(){
  //   database.ref(`users/${this.props.user_id}/cat1papers`).on('value', (snapshot) => {
  //     const val = snapshot.val().coins;
  //     this.setState((prevState) => {
  //       return{
  //           coins: val
  //       };            
  //     });
  //   });    
  // }

  // componentDidMount() {
  //     this.getUserCoins()
  // };
  
  render() {
      return(
        <div>
          {/* {console.log(this.props.user_id)} */}
          <header className="show-for-desktop header">
          <div className="content-container">
            <div className="header__content">
              <Link className="header__title" to="/">
                {
                  window.location.pathname=="/cat1papers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
                  window.location.pathname=="/cat2papers"? <img src="./images/header-font.png" height="50px" width="150px"/> : null ||
                  window.location.pathname=="/fatpapers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
                  window.location.pathname=="/materials"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
                  window.location.pathname=="/placements"? <img src="./images/header-font.png" height="50px" width="150px"/>: <img src="../../images/header-font.png" height="50px" width="150px"/>
                }
              </Link>
              <div>
                <span className="show-for-desktop">
                  <span className="dropdown">
                    {
                      window.location.pathname=="/cat1papers" || 
                      window.location.pathname=="/cat2papers" || 
                      window.location.pathname=="/fatpapers" ||
                      window.location.pathname=="/materials"
                      ? 
                      <span className="header-button header-button--link-u">
                        Examination 
                        &nbsp;<i className="fa fa-caret-down" style={{fontSize:'2rem',color:'black'}}></i>
                      </span>
                      :
                      <span className="header-button header-button--link">
                        Examination
                        &nbsp;<i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
                      </span>
                    }
                    <div className="dropdown-content">
                      <Link to="/cat1papers" className="button button--link">CAT-1 Papers</Link>
                      <Link to="/cat2papers" className="button button--link">CAT-2 Papers</Link>
                      <Link to="/fatpapers" className="button button--link">FAT Papers</Link>
                      <hr style={{margin:'0',padding:'0',align:'center',border:'1px solid #84d0d0'}}/>
                      <Link to="/materials" className="button button--link" style={{color:'#84d0d0'}}>Study Materials</Link>
                    </div>
                  </span>
                  <span className="dropdown-blog">
                    {
                      window.location.pathname=="/room-counselling" || 
                      window.location.pathname=="/hostel-vacating-procedure" ||
                      window.location.pathname=="/npm-package" ||
                      window.location.pathname=="/placement-guide" ||
                      window.location.pathname=="/placement-experience"
                      ? 
                      <span className="header-button header-button--link-u">
                        Blogs 
                        &nbsp;<i className="fa fa-caret-down" style={{fontSize:'2rem',color:'black'}}></i>
                      </span>
                      :
                      <span className="header-button header-button--link">
                        Blogs
                        &nbsp;<i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
                      </span>
                    }
                    <div className="dropdown-content-blog">
                      <Link to="/room-counselling" className="button button--link">Hostel Room Counselling</Link>
                      <Link to="/hostel-vacating-procedure" className="button button--link">Hostel Vacating Procedure</Link>
                      <Link to="/npm-package" className="button button--link">How to get started with making NPM packages</Link>
                      <Link to="/placement-guide" className="button button--link">Guide for Placement preparation</Link>
                      <Link to="/placement-experience" className="button button--link">Placement experience - Travelling from VIT Chennai to Vellore</Link>
                    </div>
                  </span>
                  {/* <Link to="/blogs">
                    {
                      window.location.pathname=="/blogs" ||
                      window.location.pathname=="/room-counselling" ||
                      window.location.pathname=="/hostel-vacating-procedure"
                      ? 
                      <span className="header-button header-button--link-u">Blogs</span>
                      :
                      <span className="header-button header-button--link">Blogs</span>
                    }
                  </Link> */}
                  <Link to="/placements">
                    {
                      window.location.pathname!=="/materials" &&
                      window.location.pathname!=="/cat1papers" &&
                      window.location.pathname!=="/cat2papers" &&
                      window.location.pathname!=="/fatpapers" &&
                      window.location.pathname!=="/about-us" &&
                      window.location.pathname!=="/faqs" &&
                      window.location.pathname!=="/blogs" &&
                      window.location.pathname!=="/room-counselling" &&
                      window.location.pathname!=="/hostel-vacating-procedure" &&
                      window.location.pathname!=="/npm-package" &&
                      window.location.pathname!=="/placement-guide" &&
                      window.location.pathname!=="/placement-experience" &&
                      window.location.pathname!=="/" &&
                      <span className="header-button header-button--link-u">Placements</span> ||
                      <span className="header-button header-button--link">Placements</span>
                    }
                  </Link>
                  {/* {console.log(this.state.width)} */}
                  {/* <span>&nbsp;&nbsp;</span> */}
                  {/* <Info /> */}
                  {/* <button onClick={ this.props.startLogout}>Logout</button> */}
                </span>
              </div>
            </div>
          </div>
          </header>
        {/* <MatPaperButton /> */}
        </div>
      );
  }
}


// export const Header = ({ startLogout, user_profPic, user_id }) => (
  // <div>
  //   {/* {
  //     database.ref(`users/${user_id}/cat1papers`).once('value')
  //     .then((snapshot) => {
  //       const val = snapshot.val().coins;
  //       console.log(val);
  //     }).catch((e) => {
  //       console.log('Error fetching!',e);
  //     })
  //   } */}
  //   {console.log(user_id)}
  //   <header className="show-for-desktop header">
  //   <div className="content-container">
  //     <div className="header__content">
  //       <Link className="header__title" to="/">
  //         {
  //           window.location.pathname=="/cat1papers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
  //           window.location.pathname=="/cat2papers"? <img src="./images/header-font.png" height="50px" width="150px"/> : null ||
  //           window.location.pathname=="/fatpapers"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
  //           window.location.pathname=="/materials"? <img src="./images/header-font.png" height="50px" width="150px"/>: null ||
  //           window.location.pathname=="/placements"? <img src="./images/header-font.png" height="50px" width="150px"/>: <img src="../../images/header-font.png" height="50px" width="150px"/>
  //         }
  //       </Link>
  //       <div>
  //         <span className="show-for-desktop">
  //           <span className="dropdown">
  //             {
  //               window.location.pathname=="/cat1papers" || 
  //               window.location.pathname=="/cat2papers" || 
  //               window.location.pathname=="/fatpapers"
  //               ? 
  //               <span className="header-button header-button--link-u">
  //                 Papers
  //                 <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'black'}}></i>
  //               </span>
  //               :
  //               <span className="header-button header-button--link">
  //                 Papers
  //                 <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
  //               </span>
  //             }
  //             <div className="dropdown-content">
  //               <Link to="/cat1papers" className="button button--link">CAT-1</Link>
  //               <Link to="/cat2papers" className="button button--link">CAT-2</Link>
  //               <Link to="/fatpapers" className="button button--link">FAT</Link>
  //             </div>
  //           </span>
  //           <Link to="/materials">{window.location.pathname=="/materials"? <span className="header-button header-button--link-u">Materials</span>:<span className="header-button header-button--link">Materials</span>}</Link>
  //           <Link to="/placements">
  //             {
  //               window.location.pathname!=="/materials" &&
  //               window.location.pathname!=="/cat1papers" &&
  //               window.location.pathname!=="/cat2papers" &&
  //               window.location.pathname!=="/fatpapers" &&
  //               <span className="header-button header-button--link-u">Placements</span> ||
  //               <span className="header-button header-button--link">Placements</span>
  //             }
  //           </Link>
  //           {/* <span className="dropdown-pic">
              
  //             <div id="myDropdown-pic" className="dropdown-content-pic">
  //               <a href="#">Link 1</a>
  //               <a href="#">Link 2</a>
  //               <a href="#">Link 3</a>
  //             </div>
  //           </span> */}
  //           <span className="dropdown-pic">
  //             {/* <button class="dropbtn-pic">Dropdown</button> */}
  //             <img src={user_profPic} style={{borderRadius:'50%',border:'solid #84d0d0 2px'}} height='40px' width='40px' />
  //             <div className="dropdown-content-pic">
  //               <div>
  //                 <img src={user_profPic} style={{borderRadius:'50%'}} height='16px' width='16px' />
  //                 Coins: {}
  //                 </div>
  //               <div>FAQs</div>
  //               <div>About Us</div>
  //               <button onClick={startLogout}>Logout</button>
  //             </div>
  //           </span> 
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  //   </header>
  // {/* <MatPaperButton /> */}
  // </div>
// );

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => {
  return {
    // user_profPic: firebase.auth().currentUser.photoURL,
    // user_id: firebase.auth().currentUser.uid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);