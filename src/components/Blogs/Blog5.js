import React from 'react';
import Header from '../Header/Header';
import MatPaperButton from '../Materials/MatPaperButton';
import { connect } from 'react-redux';
import Footer from '../Footer';
import ScrollButton from '../Scroll to top/ScrollButton';
const Blog5 = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <div className="content-container" style={{paddingBottom:'50px'}}>
        <h1>Placement experience - Travelling from VIT Chennai to Vellore</h1>
        <p>Hello VITians!</p>
        <p>There are a lot of companies that come to VIT for on-campus placements. Most of them come to Vellore campus for the recruitment process and hence students from Chennai campus may need to travel to Vellore campus for completing their interview process.</p>
        <p>Here is a placement experience of a colleague of mine from VIT Chennai campus who bagged a Super Dream job offer. This blog will clear your travelling queries to Vellore during placements.</p>
        <h3><b>His experience:</b></h3>
        <h3 style={{margin:'0px 20px',fontWeight:'lighter'}}><i>"I would have to tell from my experience that VIT would ensure all the facilities for Chennai students for accommodation at VIT Vellore."</i></h3>
        <p>1. There will be forms rolling out frequently from VIT-PAT regarding registration of Bus Facilities and Hostel Facilities.</p>
        <p>2. Both Hostelers and Day Scholars can avail the Bus and Hostel Facilities by filling the form.</p>
        <p>For boys and girls, accommodation would be given in separate hostels.</p>
        <p>3. Each bus would have a coordinator from VIT staff as point of contact. They will be available over call for queries.</p>
        <p>4. Discipline and punctuality is essential throughout the process.</p>
        <p>5. Chennai students can stay at Vellore Hostel only if they have proper permission,i.e. they have to fill the forms on time.</p>
        <p>6. As a Golden Rule, if you have missed something, don't panic, make sure you inform the assigned coordinator ASAP.</p>
        <p>7. Any kind of miscommunication will be viewed as in-disciplinary action and consequences could be counselling or/and blacklisting for few  weeks / months.</p>
        <p>8. You have to check your mails frequently as all the information would be shared via mails.</p>
        <p>All the best 😃</p>
        <p>Happy Placements!</p>
      </div>
      <Footer/>
      <ScrollButton/>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Blog5);