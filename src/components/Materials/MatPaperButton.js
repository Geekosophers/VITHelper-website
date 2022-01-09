import React from 'react';
import { connect } from 'react-redux';
import database from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export class MatPaperButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleState = this.handleState.bind(this);
        this.showImage = this.showImage.bind(this);
        this.getUserCoins = this.getUserCoins.bind(this);
        this.state = {
            count: 2,
            coins: '',
            image: false
        };
    }

    showImage() {
        this.setState((prevState) => {
            return{
                image: true
            };            
        });
        setTimeout(() => {
        this.setState({
            image: false
            });
            database.ref(`users/${this.props.user_id}/`).update({ coins:this.state.coins + 30 });
        }, 10000);
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
    
    render(){
        return(
            <div>
                {
                <div>
                    <span className="show-for-mobile button-matpap__disp">
                    <div className="button button--link">
                        {   this.state.count!=1 ?
                            (
                                window.location.pathname=="/"?<span>Greetings VITian</span> : null ||
                                window.location.pathname=="/materials"?<span>Materials</span> : null ||
                                window.location.pathname=="/room-counselling"?<span>Blogs</span> : null ||
                                window.location.pathname=="/hostel-vacating-procedure"?<span>Blogs</span> : null ||
                                window.location.pathname=="/npm-package"?<span>Blogs</span> : null ||
                                window.location.pathname=="/placement-guide"?<span>Blogs</span> : null ||
                                window.location.pathname=="/placement-experience"?<span>Blogs</span> : null ||
                                window.location.pathname=="/faqs"?<span>FAQs</span> : null ||
                                window.location.pathname=="/about-us"?<span>About Us</span> : null ||
                                window.location.pathname=="/cat1papers"?<span>CAT-1 Papers</span> : null ||
                                window.location.pathname=="/cat2papers"?<span>CAT-2 Papers</span> : null ||
                                window.location.pathname=="/fatpapers"?<span>FAT Papers</span> : null ||
                                window.location.pathname=="/placements"?<span>Placements</span> : null ||
                                window.location.pathname=="/placements/article"?<span>Reviews</span> : null ||
                                window.location.pathname=="/placements/topics"?<span>Important Topics</span> : null ||
                                window.location.pathname=="/placements/advice"?<span>Advice</span> : null ||
                                window.location.pathname=="/placements/resources"?<span>Useful Resources</span> : null ||
                                window.location.pathname=="/placements/pat"?<span>PAT-Rules and Regulations</span> : null
                            )
                            :
                            (<span>MENU:</span> )
                        }
                    </div>
                    {
                        this.state.image==false && this.state.count==2 && 
                        <div className="ham" onClick={this.handleClick}>
                            <div className="ham__div"></div>
                            <div className="ham__div"></div>
                            <div className="ham__div"></div>
                        </div>
                    }
                    {
                        this.state.image==false && this.state.count==1 && 
                        <div className="ham" onClick={this.handleClick}>
                            <div className="ham__div1"></div>
                            <div className="ham__div2"></div>
                            <div className="ham__div3"></div>
                        </div>
                    } 
                    {
                        this.state.image==false && this.state.count==0 && 
                        <div className="ham" onClick={this.handleClick}>
                            <div className="ham__div11"></div>
                            <div className="ham__div22"></div>
                            <div className="ham__div33"></div>
                        </div>
                    }  
                </span>
                {this.state.count==1 &&
                <div> 
                    <div className="ham__nav" onClick={this.handleState}>
                        {
                            this.state.image && <img src="./images/add.png" style={{border:'solid 2px white',borderRadius:'7px',margin:'10px',padding:'14px'}} height='auto' width='90%' />
                        }
                        <div className="button button--link"><u>Examination:</u></div>
                        <Link to="/cat1papers" className="button button--link-for-matheader">&#x25BA; CAT-1 Papers</Link>
                        <Link to="/cat2papers" className="button button--link-for-matheader">&#x25BA; CAT-2 Papers</Link>
                        <Link to="/fatpapers" className="button button--link-for-matheader">&#x25BA; FAT Papers</Link>
                        <Link to="/materials" className="button button--link-for-matheader">&#x25BA; Materials</Link>
                        <div className="button button--link"><u>Blogs</u></div>
                        <Link to="/hostel-vacating-procedure" className="button button--link-for-matheader">&#x25BA; Hostel Vacating Procedure</Link>
                        <Link to="/room-counselling" className="button button--link-for-matheader">&#x25BA; Hostel Room Councelling</Link>
                        <Link to="/npm-package" className="button button--link-for-matheader" style={{display:'flex',flexDirection:'row'}}><span>&#x25BA;</span> <span>Get started with making NPM packages</span></Link>
                        <Link to="/placement-guide" className="button button--link-for-matheader" style={{display:'flex',flexDirection:'row'}}><span>&#x25BA;</span> <span>Guide for Placement preparation</span></Link>
                        <Link to="/placement-experience" className="button button--link-for-matheader" style={{display:'flex',flexDirection:'row'}}><span>&#x25BA;</span> <span>Placement experience - Travelling from VIT Chennai to Vellore</span></Link>
                        <div className="button button--link"><u>Placements:</u></div>
                        <Link to="/placements" className="button button--link-for-matheader">&#x25BA; Home</Link>
                        <Link to="/placements/article" className="button button--link-for-matheader">&#x25BA; Reviews</Link>
                        <Link to="/placements/topics" className="button button--link-for-matheader">&#x25BA; Important Topics</Link>
                        <Link to="/placements/advice" className="button button--link-for-matheader">&#x25BA; Advice</Link>
                        <Link to="/placements/resources" className="button button--link-for-matheader">&#x25BA; Useful Resources</Link>
                        <Link to="/placements/pat" className="button button--link-for-matheader">&#x25BA; PAT-Rules and Regulations</Link>
                    </div>
                </div>
                }
                {this.state.count==0 &&
                    <div className="ham__nav1">
                        <div className="button button--link"><u>Examination:</u></div>
                        <div className="button button--link-for-matheader">&#x25BA; CAT-1 Papers</div>
                        <div className="button button--link-for-matheader">&#x25BA; CAT-2 Papers</div>
                        <div className="button button--link-for-matheader">&#x25BA; FAT Papers</div>
                        <div className="button button--link-for-matheader">&#x25BA; Materials</div>
                        <div className="button button--link"><u>Blogs</u></div>
                        <div className="button button--link"><u>Placements:</u></div>
                        <div className="button button--link-for-matheader">&#x25BA; Home</div>
                        <div className="button button--link-for-matheader">&#x25BA; Reviews</div>
                        <div className="button button--link-for-matheader">&#x25BA; Important Topics</div>
                        <div className="button button--link-for-matheader">&#x25BA; Advice</div>
                        <div className="button button--link-for-matheader">&#x25BA; Useful Resources</div>
                        <div className="button button--link-for-matheader">&#x25BA; PAT-Rules and Regulations</div>
                    </div>
                }
                </div>
                }
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
  });

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MatPaperButton);