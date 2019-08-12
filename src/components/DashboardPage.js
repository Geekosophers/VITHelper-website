import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';
import Disclaimer from './Disclaimer';
import ImageUpload from './ImageUpload';
import WhatsApp from './WhatsApp';
import ShareButton from './ShareButton';

const DashboardPage = () => (
  <div>
    {/* <ImageUpload /> */}
    {/* <Disclaimer /> */}
    <TeachersListFilter />
    <TeachersList />
    {/* <WhatsApp /> */}
    <ShareButton />
  </div>
);

export default DashboardPage;
