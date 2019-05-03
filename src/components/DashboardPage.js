import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';
import Disclaimer from './Disclaimer';

const DashboardPage = () => (
  <div>
    <Disclaimer />
    <TeachersListFilter />
    <TeachersList />
  </div>
);

export default DashboardPage;
