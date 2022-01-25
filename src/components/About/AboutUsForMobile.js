import React from 'react';
import Header from '../Header/Header';
import MatPaperButton from '../Materials/MatPaperButton';
// import ApplicationScreen from './ApplicationScreen';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const AboutUsForMobile = () => (
    <div>
        {window.scrollTo(0, 0)}
        <Header />
        <MatPaperButton/>
        {/* <ApplicationScreen /> */}
        <div className="modal-page-desktop">
            <div className='content-container'>
                <h3 className="aboutus__title">About Us</h3>
                <p className="aboutus__body" style={{textAlign:'justify'}}>VITHelper is an initiative to ease the lives of fellow students. The features have been inpsired from problems that its team faced throughout their college journey. It aims to become a platform where students can clear their doubts. Its objective is to become a lifeline for the students in the most interactive method. It welcomes ideas and new problem statements that pop around due to the dynamic nature of life at VIT. It has a vision of expansion to help bring a change in lives of as many students as possible. It welcomes students to join the driving community and display their creativity. It strives at keeping up with the pace of changing rules and regulations as well as evaluation and education methodologies at VIT by regular upgradation and revision of the content available on the platform. It envisions to create a healthy learning environment among the students.</p>
                <h3 className="aboutus__title">Features:</h3>
                <div className="show-for-mobile">
                    <div className="aboutus__body">
                        <h4>1. Question Papers- </h4>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                            <img src="./images/features/papers.png" height="100%" width="40%"></img>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'4px'}}>
                                
                                Ace your CATS and FATS with previous sem question papers covering a wide range of subjects.
                                <span>
                                    <Link to="/cat1papers" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>CAT1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/cat2papers" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>CAT2</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/fatpapers" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>FAT</Link>
                                </span>
                            </div>
                        </div>
                        <h4>2. Blogs- </h4>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
                            <img src="./images/features/blogs.png" height="100%" width="40%"></img>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'4px'}}>
                                
                                A VITian must be used to dealing with elaborate procedures. We have blogs to help you through them.
                            </div>
                            
                        </div>
                        <h4>3. Placements- </h4>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
                            <img src="./images/features/placement.png" height="100%" width="40%"></img>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
                                
                                Here is a placement-preparation package so that you can grab that super-dream package.
                                <span><Link to="/placements" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>Explore</Link></span>
                            </div>
                        </div>
                        <h4>4. Study Materials- </h4>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
                            <img src="./images/features/study-materials.png" height="100%" width="40%"></img>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'4px'}}>
                                
                                2 AM already and confused where to study from? Find the crisp hand-sorted study materials here.
                                <span><Link to="/materials" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>Explore</Link></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="show-for-desktop">
                <div className="aboutus__body">
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                            <img src="./images/features/papers.png" height="100%" width="40%"></img>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'4px'}}>
                                <h4>Question Papers- </h4>
                                Ace your CATS and FATS with previous sem question papers covering a wide range of subjects.
                                <span>
                                    <Link to="/cat1papers" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>CAT1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/cat2papers" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>CAT2</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/fatpapers" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>FAT</Link>
                                </span>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'4px'}}>
                                <h4>Blogs- </h4>
                                A VITian must be used to dealing with elaborate procedures. We have blogs to help you through them.
                            </div>
                            <img src="./images/features/blogs.png" height="100%" width="40%"></img>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
                            <img src="./images/features/placement.png" height="100%" width="40%"></img>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
                                <h4>Placements- </h4>
                                Here is a placement-preparation package so that you can grab that super-dream package.
                                <span><Link to="/placements" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>Explore</Link></span>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'4px'}}>
                                <h4>Study Materials- </h4>
                                2 AM already and confused where to study from? Find the crisp hand-sorted study materials here.
                                <span><Link to="/materials" style={{color:'#84d0d0',borderBottom:'solid #84d0d0 1px'}}>Explore</Link></span>
                            </div>
                            <img src="./images/features/study-materials.png" height="100%" width="40%"></img>
                        </div>
                    </div>                    
                </div>
                <h3 className="aboutus__title">Disclaimer</h3>
                <p className="aboutus__body" style={{textAlign:'justify'}}>VITHelper does not intend to be helpful to the students in any form of malpractices. It's soul objective is to make their lives easier by providing content that can help them with exam preparations as well as make them well versed with rules and functioning of VIT. It does not in any form intend to harm VIT, it's employee's or infrastructure's reputation. It does not stand in favour of offensive language or actions and the ones pursuing these will be blocked off the platform. This platform has been made by its creators with due respect to their Alma matter.</p>
                <img src='./images/ttt.png' height="100%" width="100%" style={{marginTop:'40px'}}></img>
            </div>
        </div>
        <Footer/>
    </div>
);

export default AboutUsForMobile;