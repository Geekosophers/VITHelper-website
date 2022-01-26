import React from 'react';
import MaterialsList from './MaterialsList';
import MaterialsListFilter from './MaterialsListFilter';
import WhatsApp from '../WhatsApp';
import MatPaperButton from './MatPaperButton';
import Header from '../Header/Header';
import ShareButton from '../ShareButton';
import Footer from '../Footer';
import ScrollButton from '../Scroll to top/ScrollButton';

const Materials = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <MaterialsListFilter />
    <MaterialsList />
    <WhatsApp />
    <ShareButton />
    <Footer/>
    <ScrollButton/>
  </div>
);

export default Materials;