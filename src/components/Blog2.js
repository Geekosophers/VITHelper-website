import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import { connect } from 'react-redux';


const Blogs = (props) => {
  // console.log(props.placement);
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <div className="content-container" style={{paddingBottom:'50px'}}>
        <h1>VIT Hostel Room Counselling- 2020</h1>
        <p>Hey VITians! Is the counselling date close? Are you sitting for the first time in the room counselling process and have no clue about it? Don't worry, you are at the right place. Go through this blog and get all your doubts cleared.</p>
        <h3><b>Room counselling process</b></h3>
        <h3><b>A. VIT Men's Hostel-</b></h3>
        <p><b><i>I. Location-</i></b> Anna Auditorium and CS Hall</p>
        <p><b><i>II. Counselling Process-</i></b></p>
        <p><b>Step-1</b> Registration-</p>
        <p>Student of a particular Group, Slot and Time enters Anna Audi with his ID card. ID Card is scanned using the bar-code scanner. A Registration Confirmation is sent immediately as an SMS. (The status can even be checked in his login)</p>
        <p><b>Step-2</b> Token No. Generation-</p>
        <p>After the Registration time gets over a token is generated for that particular slot. Token No. as SMS will be sent immediately. The same can be viewed in Academic Login too.</p>
        <p><b>Step-3</b> Counselling (Room Selection)-</p>
        <p>Student will carry his friends' ID card whom he likes to have as his room mate along with his ID card and the selection process is carried out with help of bar-code scanner in CS Hall.</p>
        <p><b>Confirmation-</b>Once the room is selected, SMS of Room Confirmation is sent to topper of the group and they can view the provisional Room allocation in the VTOP login.</p>
        <p><b><i>III. Hall Arrangement-</i></b></p>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fhall-arrangement.png?alt=media&token=c28c97a2-cb52-41c1-b204-fae8ef6208bf" />
        </div>
        <h4 style={{borderLeft:'solid 3px #505050',paddingLeft:'5px'}}>
          <i>The sequence of room filling can be observed from the given links-</i>
          <div style={{color:"#84d0d0",paddingLeft:'3px',paddingBottom:'5px'}}><a href="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2FMens%20Hostel%20Group%201.pdf?alt=media&token=011b99c2-3fb4-4766-ae9c-3dc5fa949423" target="_blank">&#x25BA; Men's Hostel - Group 1</a></div>
          <div style={{color:"#84d0d0",paddingLeft:'3px',paddingBottom:'5px'}}><a href="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2FMens%20Hostel%20Group%202.pdf?alt=media&token=95a17f0b-9cfa-4864-80bd-2f46189ef210" target="_blank">&#x25BA; Men's Hostel - Group 2</a></div>
          <div>*The data is collected from 2019 room counselling.</div>
        </h4>
        <h3><b>B. VIT Ladies Hostel-</b></h3>
        <p><b><i>I. Location-</i></b> Channa Reddy Auditorium</p>
        <p><b><i>II. Counselling Process-</i></b></p>
        <p>&bull;For allotment of rooms, students will be called as per their NCGPA rank within the group. For the shared room, room allotment will be done only if the group has full room strength (Ex: For a 4 bedded room, 4 students should be identified by the group prior to room counseling).</p>
        <p>&bull;Room vacancy details will be displayed on screen at Dr. M. Channa Reddy Auditorium to enable students to decide on the room to be chosen during the counseling process.</p>
        <h4 style={{borderLeft:'solid 3px #505050',paddingLeft:'5px'}}>
          <i>The sequence of room filling can be observed from the given link-</i>
          <div style={{color:"#84d0d0",paddingLeft:'3px',paddingBottom:'5px'}}><a href="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2FLadies%20Hostel%20Group%201.pdf?alt=media&token=ce94c9ff-3daf-4098-8e47-2b88437504e4" target="_blank">&#x25BA; Ladies Hostel - Group 1</a></div>
          <div>*The data is collected from 2019 room counselling.</div>
        </h4>
        <p style={{textAlign:'center'}}>&bull;&nbsp;&bull;&nbsp;&bull;</p>
        <h2>Frequently Asked Questions -</h2>
        <p><b>1. When is the counselling for the year 2020?</b></p>
        <p>Answer - 13th, 14th and 15th March 2020, according to your group.</p>
        <p><b>2. What is NCGPA rank?</b></p>
        <p>Answer - NCGPA based ranking will be given based on students' academic performance as well as the Code of Conduct within each group. Normalized CGPA of the students' will be calculated as given below:</p>
        <p style={{textAlign:'center'}}><i>NCGPA = CGPA X (GROUP TOPPER CGPA / BRANCH TOPPER CGPA)</i></p>
        <p><b>3. Is the ranking common for all the branches or is calculated separately?</b></p>
        <p>Answer - Common ranking system is followed. The rank of a student is calculated based on the formula given below:</p>
        <p style={{textAlign:'center'}}><i>NCGPA = CGPA X (GROUP TOPPER CGPA / BRANCH TOPPER CGPA)</i></p>
        <p><b>4. Can I get a room with my friends?</b></p>
        <p>Answer - If someone on your group has a good CGPA/rank then he/she would be able to take the room along with the group. More the CGPA, better are the chances of getting a preferred room together.</p>
        <p><b>5. When can I choose for Mess?</b></p>
        <p>Answer -The mess that will be allotted initially will be the one nearest to the block they have been allotted a room in. Students can change their mess during the routine mess change process being done every month.</p>
        <p><b>6. What is the process for NRI students?</b></p>
        <p>Answer - Room counselling is done separately for NRI students. They have better options and generally get the desired rooms.</p>
        <p><b>7. What are easily available rooms for First Years?</b></p>
        <p>Answer - Single bed rooms are easily available for first years. And as the seniority increases, the demand for single beds increases.</p>
        <p><b>8. Are there any benefits attached with any particular branch?</b></p>
        <p>Answer - There is benefit for branches with less students. For example, since common rank is calculated for the room counselling, there will be more competition in CSE than Civil. This implies that your friend with less CGPA can have a better ranking is he/she is from a branch with lesser students.</p>
        <p><b>9. On what basis the ranks are calculated for students sitting in room counselling for first time(freshman)?</b></p>
        <p>Answer - For freshman NCGPA rank is calculated based on first semester's performance.</p>
        <p><b>10. When and where I will get my NCGPA rank and slot timing?</b></p>
        <p>Answer - NCGPA rank and slot timings of the students taking part in the counseling process will be displayed in their respective student login ONE day in advance(for girls) and some days in advance(for boys).</p>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fcounselling-details.jpeg?alt=media&token=8544cd76-8e90-47fa-ad1b-e934505f6988" />
        </div>
        <p><b>11. Can I take room with senior/ junior?</b></p>
        <p>Answer - No. Students can select their room partners falling within that group only.</p>
        <p><b>12. Do all the roommates need to be present in the auditorium for the counselling process?</b></p>
        <p>Answer - No. Only the topper of the group needs to be present in the Audi with all the roommates ID card.</p>
        <p style={{textAlign:'center'}}>&bull;&nbsp;&bull;&nbsp;&bull;</p>
        <p>Hope this blog has been helpful. All the best for the counselling! Hope you get your desired room and roommates.</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Blogs);