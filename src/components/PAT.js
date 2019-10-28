import React from 'react';
import Cat1papersList from './Cat1papersList';
import Cat1papersListFilter from './Cat1papersListFilter';
import WhatsApp from './WhatsApp';
import Header from './Header';
import Rules from './Rules';
import { Link } from 'react-router-dom';
import PlacementsHeader from './PlacementsHeader';
import MatPaperButton from './MatPaperButton';
import ShareButton from './ShareButton';

const PAT = () => (
  <div>
    <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <div className="content-container">
        <div className="placement-container placement-container-pat">
            <div className="placement-container__text">
                <div className="placement-container__name show-for-desktop" >Placement and Training Cell</div>
                <div className="placement-container__name show-for-mobile" style={{marginTop:'30px'}}>Placement and Training Cell</div>
                <a href="https://vit.ac.in/placements-overview/placement" target="_blank">
                    <div>The PAT centre plays an integral role in creating the illustrious placement record of VIT. It ensures smooth functioning of the placement activities in the campus. The centre further facilitates training activities of the students and makes sure they get placed in the best of both national and international companies. In 2018-19 alone, PAT has...</div>
                    <div style={{color:'#84d0d0'}}>Click here to know more...</div>
                </a>
            </div>
            <div className="show-for-desktop"><img src="../images/placements/pat.jpg" height="300px" width="300px" alt="PAT" /></div>
            {/* <div className="show-for-mobile"><img src="../images/placements/pat.jpg" height="100px" width="100px" alt="PAT" /></div> */}
        </div>
        <div className="placement-container__name" style={{marginTop:'50px'}}>Rules and Regulations</div>
        <table id="rules">
            <tbody>
                <tr>
                    <th>Company selection</th>
                    <th>Eligibility</th>
                </tr>
                <tr>
                    <td>Selected by Super Dream Company for Placement</td>
                    <td>Not eligible for any further internship or placement</td>
                </tr>
                <tr>
                    <td>Selected by Super Dream Company for only internship</td>
                    <td>Eligible for Dream Companies Placements(IT/Core) and IT Services (TCS,CTS etc.,) Companies Placements</td>
                </tr>
                <tr>
                    <td>Selected by Dream – IT Company for Placement</td>
                    <td>Eligible for Super Dream Companies placement and internship<div>Non CS & IT students(UG & PG) will be eligible for Dream – Core placements</div></td>
                </tr>
                <tr>
                    <td>Selected by Dream – Core Company for Placement</td>
                    <td>Eligible for Super Dream Companies placement and internship<div>Not eligible for Dream-IT or another Dream – Core company placement or Dream internship</div></td>
                </tr>
                <tr>
                    <td>Selected by Dream - IT company for Internship</td>
                    <td>Eligible for Super Dream Companies (only Placements), Dream Core Companies(Only Placements) and IT services Companies</td>
                </tr>
                <tr>
                    <td>Selected by Dream – Core company for Internship</td>
                    <td>Eligible for Super Dream Companies (only Placements), Dream – IT Companies(only Placements) and IT services Companies</td>
                </tr>
                <tr>
                    <td>Selected by IT Services company(Regular offer)</td>
                    <td>Eligible for Dream(IT & Core) and Super Dream Companies internship and Placements</td>
                </tr>
            </tbody>
        </table>
        <a href="../images/placements/rules.png" download>
            <div style={{textAlign:'right',color:'blue'}}>Download the table</div>
        </a>
        <div className="placement-container__text" style={{lineHeight:'2.0',marginBottom:'50px'}}>
            <div className="placement-container__name" >News</div>
            <div>&#x25BA;THE HINDU - <a href="https://www.thehindu.com/news/national/tamil-nadu/vit-placement-drive-over-2000-students-land-jobs/article29395890.ece" style={{color:'#84d0d0'}} target="_blank">VIT placement drive: over 2,000 students land jobs</a></div>
            <div>&#x25BA;Business Standard - <a href="https://www.business-standard.com/article/education/vit-placement-drive-2019-245-companies-recruit-2026-students-119091300166_1.html" style={{color:'#84d0d0'}} target="_blank">VIT placement drive 2019: 245 companies recruit 2026 students</a></div>
            <div>&#x25BA;CAREERS360 - <a href="https://engineering.careers360.com/articles/vit-placement-report-2018" style={{color:'#84d0d0'}} target="_blank">VIT Placement report 2018</a></div>
            <div>&#x25BA;Quora - <a href="https://qr.ae/TWHhom" style={{color:'#84d0d0'}} target="_blank">How are placements in vit?</a></div>
            <div>&#x25BA;Business Line - <a href="https://www.thehindubusinessline.com/news/education/over-2000-vit-students-secure-super-dream-dream-jobs/article29402249.ece" style={{color:'#84d0d0'}} target="_blank">Over 2,000 VIT students secure ‘Super Dream’ & ‘Dream’ jobs</a></div>
        </div>
        {/* <div>
            1.       Students who plan to do their higher studies cannot sit for Super Dream or Dream companies recruitment(placements or internships). Any violation would lead 
            to disciplinary action. 
            2.       Companies when they come for placements, may select students for only internship also. 90% of the students who got only internships, have been converted as  
            Full time employees(based on past records) after the internship period. Please find below the various categories in selection process.The category of the 
            company(Dream / Super Dream companies) will be notified in the PAT Notice. 
            3.       Company Categories are decided by the PAT office on various parameters and not only on CTC offered. Please refer the PAT Notices for Company Category.
            4.       If a Dream-IT selected student gets placed in a Dream-Core company, his/her Dream-IT placement automatically gets cancelled. For example, if a Deloitte 
            student gets placed in MRF, his/her offer with Deloitte gets automatically cancelled.
            5.       There may be multiple recruitments happening on a given day. Students who are short listed by the first company on a given day should proceed with the first 
            company's process, they will not be eligible for the second company's process which may start on the same day.
            6.       Some companies may delay the announcement of results. Meanwhile, if a student gets selected in the next company, he/she has to take the offer of the company 
            which announces the result first.
            7.       If 2 companies announce the results on the same day and a student gets selected in both the companies, he /she will be given an option to choose the company 
            and should submit their choice on the same day to PAT Office
            8.      Students may withdraw from a selection process only after the Pre Placement talk and before the test process. If there is no pre placement talk, they can 
            withdraw before the results are announced by giving a letter to Director(PAT). If the reason is genuine, it will be approved. Other than above, no withdrawals   
            are allowed at any part of the selection process or after the results announcement.
            9.       All the registrations will be done through campusinteraction or google docs. No extension of time or manual registration will be done. Students are requested to 
            see the PAT mails regularly and apply before the prescribed date and time. No registration will be accepted after the prescribed registration date and time. 
            There is NO SPOT registration for any process. Students are requested not to approach PAT office in this regard.
            10.   All the short lists after the test process/interview process will be communicated through vitians2020@googlegroups.com. Students are requested to have a smart                    phone and check their emails regularly during the selection process.
            11.    Eligibility Criteria is given by the recruiting companies and PAT has no say in this. Please do not contact PAT office for relaxation. Also, please do not round off 
            the percentages(59.9 is not equal to 60), it may result in the cancellation of offer. Please do not misrepresent the academic details as it would lead to black listing 
            and disciplinary action.
            12.    Students who have registered for a particular selection process should attend the process without fail. Failing which, they will be suspended for one month from 
            attending campus recruitments. Writing mails or submitting letters through the School for exemption may not help. If it is a medical reason, Medical certificate 
            issued by health centre ONLY will be accepted.
            13.    Students should not contact PAT team on their mobiles. They can visit PAT office for any queries only during visiting hours(Mon-Friday :3 pm to 4 pm and 11 
            am to 12 noon). They can also mail their queries to
            14.    Companies short list the students on various parameters and do not disclose the same to PAT office. Students are requested to refrain from asking queries on 
            short listing criteria.
            15.    By default, only students without arrears(N & F are considered as arrears) are allowed for all campus recruitments(even it is not specified in the mails. Students 
            with arrears should not attend any campus recruitments(unless a company allows students with arrears to appear for the process which will be notified in the 
            mail.
            16.    Students who have arrears(N/ F grades) may register for PAT as and they clear their arrears.
            17.    Placed students should refer the selection notice  and refrain from attending placements(even if their  name appears in the short list/ applied list). Any violation 
            would lead to disciplinary action.
            18. Students who are clearing arrears may register with PAT immediately after submitting a letter in the PAT office. They can start applying for the companies for 
            which the registration is not over. They cannot apply for companies for which the registration is already over(even if the date of company's visit falls later).
            19. Students should attend all the Training and Placement activities in formals only. Else, they will not be allowed to attend the training or placement process.
            20. Mobile phones or electronic gadgets will not be allowed into test centres. Students while taking online tests should not open any tabs other than prescribed by    
            the company. Any malpractice will lead to disciplinary action.
            21. Any malpractice or misbehavior during the selection process will lead to disciplinary action.
            22. Any representation to the company should be routed through PAT Office. Students should refrain themselves by writing mails or talking to the recruiters. Any violation would lead to disciplinary action.
        </div> */}
        {/* <div className="placement-container__name">News</div> */}
    </div>
    <ShareButton />
  </div>
);

export default PAT;