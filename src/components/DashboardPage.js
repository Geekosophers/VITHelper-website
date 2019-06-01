import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';
import Disclaimer from './Disclaimer';
import WhatsApp from './WhatsApp';
import ShareButton from './ShareButton';

const DashboardPage = () => (
  <div>
    <Disclaimer />
    <TeachersListFilter />
    <TeachersList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default DashboardPage;
