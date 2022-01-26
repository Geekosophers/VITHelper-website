import React from 'react';
import Cat1papersList from './Cat1papersList';
import Cat1papersListFilter from './Cat1papersListFilter';
import WhatsApp from '../../WhatsApp';
import Header from '../../Header/Header';
import MatPaperButton from '../../Materials/MatPaperButton';
import ShareButton from '../../ShareButton';
import Footer from '../../Footer';
import ScrollButton from '../../Scroll to top/ScrollButton';

const CAT1Papers = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <Cat1papersListFilter />
    <Cat1papersList />
    <WhatsApp />
    <ShareButton />
    <Footer/>
    <ScrollButton/>
  </div>
);

export default CAT1Papers;