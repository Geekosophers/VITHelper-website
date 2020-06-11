import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import PlacementsHeader from './PlacementsHeader';
import { connect } from 'react-redux';

const Rules = () => (
  <div>
    <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <img src="../images/placements/rules.jpeg" alt="Rules and Regulations" />
  </div>
);

export default Rules;