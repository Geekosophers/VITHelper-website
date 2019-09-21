import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="ham__nav">
    <Link to="/cat1papers" className="button button--link">CAT-1 Papers</Link>
    <Link to="/cat2papers" className="button button--link">CAT-2 Papers</Link>
    <Link to="/fatpapers" className="button button--link">FAT Papers</Link>
    <Link to="/materials" className="button button--link">Materials</Link>
  </div>
);

export default Navigation;