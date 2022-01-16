import React from 'react';
import Header from './Header/Header';
import PlacementsHeader from './Placements/PlacementsHeader';
import MatPaperButton from './Materials/MatPaperButton';
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
    </div>
    <ShareButton />
  </div>
);

export default PAT;