import React from 'react';
import FatpapersList from './FatpapersList';
import FatpapersListFilter from './FatpapersListFilter';
import WhatsApp from './WhatsApp';
import ShareButton from './ShareButton';

const FATPapers = () => (
  <div>
    <FatpapersListFilter />
    <FatpapersList />
    {/* <WhatsApp /> */}
    <ShareButton />
  </div>
);

export default FATPapers;