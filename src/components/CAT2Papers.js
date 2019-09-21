import React from 'react';
import Cat2papersList from './Cat2papersList';
import Cat2papersListFilter from './Cat2papersListFilter';
import WhatsApp from './WhatsApp';
import ShareButton from './ShareButton';

const CAT2Papers = () => (
  <div>
    <Cat2papersListFilter />
    <Cat2papersList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default CAT2Papers;