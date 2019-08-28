import React from 'react';
import { Link } from 'react-router-dom';

const MatPaperButton = () => (
    <div>
        <span className="show-for-mobile button-matpap__disp">
            <Link to="/dashboard"><button className="button--link__bl" >{window.location.pathname=="/dashboard"? <u>Papers</u>:<span>Papers</span>}</button></Link> | 
            <Link to="/materials"><button className="button--link__bl" >{window.location.pathname=="/materials"? <u>Materials</u>:<span>Materials</span>}</button></Link>
        </span>
    </div>
);

export default MatPaperButton;