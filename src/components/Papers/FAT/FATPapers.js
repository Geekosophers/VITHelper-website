import React from 'react';
import FatpapersList from './FatpapersList';
import FatpapersListFilter from './FatpapersListFilter';
import WhatsApp from '../../WhatsApp';
import Header from '../../Header/Header';
import MatPaperButton from '../../Materials/MatPaperButton';
import ShareButton from '../../ShareButton';
import Footer from '../../Footer';
import ScrollButton from '../../Scroll to top/ScrollButton';
const FATPapers = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <FatpapersListFilter />
    <FatpapersList />
    <WhatsApp />
    <ShareButton />
    <Footer/>
    <ScrollButton/>
  </div>
);

export default FATPapers;