import React from 'react';
import Header from './Header/Header';
import MatPaperButton from './Materials/MatPaperButton';
import PlacementsHeader from './Placements/Placements';

const Rules = () => (
  <div>
    <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <img src="../images/placements/rules.jpeg" alt="Rules and Regulations" />
  </div>
);

export default Rules;