import React from 'react';
import Cat2papersList from './Cat2papersList';
import Cat2papersListFilter from './Cat2papersListFilter';
import WhatsApp from './WhatsApp';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import ShareButton from './ShareButton';

const CAT2Papers = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    {/* <Header /> */}
    <Cat2papersListFilter />
    <Cat2papersList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default CAT2Papers;