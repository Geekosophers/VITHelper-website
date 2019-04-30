import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';

const DashboardPage = () => (
  <div>
    <h3>Vit Helper</h3>
    <TeachersListFilter />
    <TeachersList />
  </div>
);






// const demoState = {
//   teachers: [{
//     id: 'sdsdfsdf',
//     name: 'Anshul',
//     comments: ['c1','c2'],
//   }],
//   filter: {
//     text: 'name'
//   }
// }

export default DashboardPage;
