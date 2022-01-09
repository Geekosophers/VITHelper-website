import React from 'react';
import { Link } from 'react-router-dom';

const Placements = () => (
  <div className="show-for-desktop">
    <div className="content-placement placement-header">
      <Link to="/placements">{window.location.pathname=="/placements" || window.location.pathname=="/" ? <div className="placement-header-border">Home</div> : <div className="placement-header-content">Home</div>}</Link>
      <Link to="/placements/article">
        {
          window.location.pathname!="/" &&
          window.location.pathname!="/placements" &&
          window.location.pathname!="/placements/news" &&
          window.location.pathname!="/placements/topics" &&
          window.location.pathname!="/placements/advice" &&
          window.location.pathname!="/placements/resources" &&
          window.location.pathname!="/placements/pat" &&
          window.location.pathname!="/placements/rules" &&
          <div className="placement-header-border">Reviews</div> ||
          <div className="placement-header-content">Reviews</div>
        }
      </Link>
      <Link to="/placements/topics">{window.location.pathname=="/placements/topics" ? <div className="placement-header-border">Important Topics</div> : <div className="placement-header-content">Important Topics</div>}</Link>
      <Link to="/placements/advice">{window.location.pathname=="/placements/advice" ? <div className="placement-header-border">Advice</div> : <div className="placement-header-content">Advice</div>}</Link>
      <Link to="/placements/resources">{window.location.pathname=="/placements/resources" ? <div className="placement-header-border">Useful Resources</div> : <div className="placement-header-content">Useful Resources</div>}</Link>
      <Link to="/placements/pat">{window.location.pathname=="/placements/pat" ? <div className="placement-header-border">PAT-Rules and Regulations</div> : <div className="placement-header-content">PAT-Rules and Regulations</div>}</Link>
    </div>
    
  </div>
);

export default Placements;