import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContent = () => (
  <div>
    <div>
        <span className="show-for-desktop">
        <div className="dropdown button button--link">Papers  <i className="fa fa-caret-down" style={{fontSize:'2rem',color:'white'}}></i>
            <div className="dropdown-content">
            <Link to="/cat1papers" className="button button--link">CAT-1</Link>
            <Link to="/cat2papers" className="button button--link">CAT-2</Link>
            <Link to="/fatpapers" className="button button--link">FAT</Link>
            </div>
        </div> |
        <Link to="/materials" className="button button--link">{window.location.pathname=="/materials"? <u>Materials</u>:<span>Materials</span>}</Link> | 
        </span>
    </div>
  </div>
);

export default HeaderContent;