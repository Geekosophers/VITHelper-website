import React from 'react';
import Cat1papersList from './Cat1papersList';
import Cat1papersListFilter from './Cat1papersListFilter';
import WhatsApp from './WhatsApp';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import ShareButton from './ShareButton';

const CAT1Papers = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <Cat1papersListFilter />
    <Cat1papersList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default CAT1Papers;