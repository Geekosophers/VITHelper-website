import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';

const DashboardPage = () => (
  <div>
    <TeachersListFilter />
    <TeachersList />
  </div>
);

export default DashboardPage;
