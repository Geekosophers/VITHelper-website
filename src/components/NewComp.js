import React from 'react';
import Link from 'react-router-dom';

const NewComp = () =>(
    <div>
        <div className="button button--link-for-matheader ham__nav-temp">
            <div style={{border:'solid 2px white',borderRadius:'7px',margin:'$m-size',padding:'14px',display:'flex'}}>
                <div>
                    {
                        <img src='./images/user.png' style={{borderRadius:'50%',border:'solid #84d0d0 2px'}} height='45px' width='45px' />
                    }
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',flex:'1'}}>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <span>
                            &nbsp;&nbsp;{<img src='../../images/circle-cropped.png' style={{borderRadius:'50%', border:'solid 1px #D4AF37'}} height='20px' width='20px' /> || <img src='./images/circle-cropped.png' style={{borderRadius:'50%', border:'solid 1px #D4AF37'}} height='20px' width='20px' />}
                        </span>
                        <span > <button className="button button-addCoins">+Add coins</button></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="ham__nav" >
            <div className="button button--link"><u>Papers:</u></div>
            <Link to="/cat1papers" className="button button--link-for-matheader">&#x25BA; CAT-1 Papers</Link>
            <Link to="/cat2papers" className="button button--link-for-matheader">&#x25BA; CAT-2 Papers</Link>
            <Link to="/fatpapers" className="button button--link-for-matheader">&#x25BA; FAT Papers</Link>
            <Link to="/materials" className="button button--link-for-matheader">&#x25BA; Materials</Link>
            <div className="button button--link"><u>Placements:</u></div>
            <Link to="/placements" className="button button--link-for-matheader">&#x25BA; Home</Link>
            <Link to="/placements/article" className="button button--link-for-matheader">&#x25BA; Reviews</Link>
            <Link to="/placements/topics" className="button button--link-for-matheader">&#x25BA; Important Topics</Link>
            <Link to="/placements/advice" className="button button--link-for-matheader">&#x25BA; Advice</Link>
            <Link to="/placements/resources" className="button button--link-for-matheader">&#x25BA; Useful Resources</Link>
            <Link to="/placements/pat" className="button button--link-for-matheader">&#x25BA; PAT-Rules and Regulations</Link>
            <div className="button button--link"><u>Info:</u></div>
            <div className="button button--link-for-matheader">
                <div>
                    {<img src='../../images/faq.png' style={{borderRadius:'50%'}} height='20px' width='20px' /> || <img src='./images/faq.png' style={{borderRadius:'50%'}} height='20px' width='20px' />}
                    <span>  <Link to="faqs">FAQs</Link></span>
                </div>
            </div>
            <div className="button button--link-for-matheader">
                <div>
                    {<img src='../../images/info.png' style={{borderRadius:'50%'}} height='20px' width='20px' /> || <img src='./images/info.png' style={{borderRadius:'50%'}} height='20px' width='20px' />}
                    <span> <Link to="/about-us">About Us</Link></span>
                </div>
            </div>
            <div className="button button--link-for-matheader">
                <div>
                    {<img src='../../images/logout.png' height='20px' width='20px' /> || <img src='./images/logout.png' height='20px' width='20px' />}
                </div>
            </div>
        </div>
    </div>
);

export default NewComp;