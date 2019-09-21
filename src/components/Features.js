import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => (
  <div>
    <p>Select from these:</p>
    <div className="features">
      <Link to="/cat1papers"><button>CAT-1 Papers</button></Link>
      <Link to="/cat2papers"><button>CAT-2 Papers</button></Link>
      <Link to="/fatpapers"><button>FAT Papers</button></Link>
      <Link to="/materials"><button>Materials</button></Link>
    </div>
  </div>
);

export default Features;