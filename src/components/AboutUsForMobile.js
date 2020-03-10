import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';

const AboutUsForMobile = () => (
    <div>
        <Header />
        <MatPaperButton />
        <div className="modal-page-desktop">
            <div className='content-container'>
                <h3 className="modal__title">About Us</h3>
                <p className="modal__body">VITHelper is an initiative to ease the lives of fellow students. The features have been inpsired from problems that its team faced throughout their college journey. It aims to become a platform where students can clear their doubts. Its objective is to become a lifeline for the students in the most interactive method. It welcomes ideas and new problem statements that pop around due to the dynamic nature of life at VIT. It has a vision of expansion to help bring a change in lives of as many students as possible. It welcomes students to join the driving community and display their creativity. It strives at keeping up with the pace of changing rules and regulations as well as evaluation and education methodologies at VIT by regular upgradation and revision of the content available on the platform. It envisions to create a healthy learning environment among the students.</p>
                <h3 className="modal__title">Disclaimer</h3>
                <p className="modal__body">VITHelper does not intend to be helpful to the students in any form of malpractices. It's soul objective is to make their lives easier by providing content that can help them with exam preparations as well as make them well versed with rules and functioning of VIT. It does not in any form intend to harm VIT, it's employee's or infrastructure's reputation. It does not stand in favour of offensive language or actions and the ones pursuing these will be blocked off the platform. This platform has been made by its creators with due respect to their Alma matter.</p>
            </div>
        </div>
    </div>
);

export default AboutUsForMobile;
