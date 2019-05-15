import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';
import Disclaimer from './Disclaimer';
import WhatsApp from './WhatsApp';

const DashboardPage = () => (
  <div>
    <Disclaimer />
    <TeachersListFilter />
    <TeachersList />
    <WhatsApp />
  </div>
);

export default DashboardPage;
