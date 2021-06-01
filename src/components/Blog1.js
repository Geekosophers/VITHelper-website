import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import { connect } from 'react-redux';


const Blog1 = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <div className="content-container" style={{paddingBottom:'50px'}}>
        <h1>Hostel Vacating Procedure</h1>
        <p>If you are leaving for PAT Internship and need to know all the required formalities then this blog is for you.</p>
        <p>I got my internship inquiry call from PAT office on 9th January while I was in VIT doing my final semester Capstone project. They inquired about my availability for an internship in the same company where I had the full time offer I received in July during campus placements. I accepted the offer and on 13th January I got the confirmation mail from the company with all joining details.</p>
        <p>I had only two working days for completing all the formalities before leaving VIT. The processes were</p>
        <p>1. Hostel Vacation</p>
        <p>2. Bonafide Certificate (also called, NOC- No objection Certificate)</p>
        <p>3. Getting my name removed from capstone project list to be processed under PAT.</p>
        <p>Since I had a hard time in managing to get them on time, I decided to explain the entire procedure through this blog.</p>
        <h2>Steps to get Bonafide Certificate-</h2>
        <p>1. Go to the school office with a letter asking for the bonafide certificate.</p>
        <div className={"portfolio-box-layout__box"}>
            <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fbonafide.jpeg?alt=media&token=6c385042-23ae-4a3a-9f2a-43625d5e06ab" />
        </div>
        <p>2. Make sure to mention any company specific details in the certificate like joining and end date. Also communicate the same while handing the letter to the school office.</p>
        <p><b>Note-</b> A friend of mine in SITE was asked to give the Zeroth review(form) again with the letter in order to transfer his name from capstone project to PAT internship.</p>
        <div className={"portfolio-box-layout__box"}>
            <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fzeroth-review.jpeg?alt=media&token=e6ce6d54-04f0-48ef-8342-38310ee38e49" />
        </div>
        <h2>Steps for vacating hostel-</h2>
        <p>1. Collect Proctor/Parent consent form from Hostel Office and get signature from your Proctor/Program chair or HOD.</p>
        <p>2. After submitting the Proctor/Parent consent form collect your Hostel Vacating Form.</p>
        <p>3. Go to Students record section (SJT Ground Floor near Students Lift) for ID tag change.</p>
        <p>4. Pay ₹150 by online for new ID card.</p>
        <p>5. Go to CTS for ID card change (Backside of Anna Auditorium,1st Floor).</p>
        <p>6. Go to concerned Mess Supervisor and Block Supervisor to get their signatures.</p>
        <p>7. Get signature from Main Building Finance Office room no (G-10).</p>
        <p>8. Take three Xerox copies of the Vacating form.</p>
        <p>9. Submit the following documents along with vacating form in Hostel Office.</p>
        <p>&bull;Original Vacating Form</p>
        <p>&bull;Refund Request Form (Yellow colour collect it from hostel office). </p>
        <p>&bull;Project / Internship letter original duly signed by Project guide or Program Chair or Placement office. </p>
        <p>&bull;First page of Bank pass book Xerox.</p>
        <p>&bull;One Xerox copy of vacating form.</p>
        <p><b><i>Note-</i></b> Without proper Project/Internship letter signed by your Project guide/Program chair one semester refund will not be processed.</p>
        <h2>Steps to get name removed from capstone project list to be processed under PAT-</h2>
        <p>1. Write a letter to the HOD as shown in the picture below. Mention clearly the following-</p>
        <div>- Date of joining</div>
        <div>- Internship period</div>
        <div>- Company name</div>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fapplication.jpeg?alt=media&token=9370d310-8430-46c3-bbfb-099720214651" />
        </div>
        <p>2. Get the approval from your Project guide and then from project coordinator.</p>
        <p>3. Submit the letter to the school office.</p>
        <p><b><i>Additional Step-</i></b> I was asked to mail the above letter along with Internship offer letter to project coordinator.</p>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Femail.png?alt=media&token=ff8769c3-32ab-42f8-bec2-56509b7bda41" />
        </div>
        <p>Hope this blog helped you in the process. Go and win over your new office!</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Blog1);