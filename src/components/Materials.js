import React from 'react';
import MaterialsList from './MaterialsList';
import MaterialsListFilter from './MaterialsListFilter';
import WhatsApp from './WhatsApp';
import ShareButton from './ShareButton';

const Materials = () => (
  <div>
    <MaterialsListFilter />
    <MaterialsList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default Materials;