import React from 'react';
import Cat2papersList from './Cat2papersList';
import Cat2papersListFilter from './Cat2papersListFilter';
import WhatsApp from '../../WhatsApp';
import Header from '../../Header/Header';
import MatPaperButton from '../../Materials/MatPaperButton';
import ShareButton from '../../ShareButton';
import Footer from '../../Footer';
import ScrollButton from '../../Scroll to top/ScrollButton';

const CAT2Papers = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <Cat2papersListFilter />
    <Cat2papersList />
    <WhatsApp />
    <ShareButton />
    <Footer/>
    <ScrollButton/>
  </div>
);

export default CAT2Papers;