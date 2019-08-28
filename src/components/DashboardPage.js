import React from 'react';
import TeachersList from './TeachersList';
import TeachersListFilter from './TeachersListFilter';
import Disclaimer from './Disclaimer';
import ImageUpload from './ImageUpload';
import WhatsApp from './WhatsApp';
import ShareButton from './ShareButton';
// import MatPaperButton from './MatPaperButton';
import Project from './Project';
import Materials from './Materials';
import Header from './Header';
// import Ad from './Ad';

const DashboardPage = () => (
  <div>
    {/* <Ad /> */}
    {/* <ImageUpload /> */}
    {/* <Disclaimer /> */}
    {/* <MatPaperButton /> */}
    {/* <TeachersListFilter />
    <TeachersList />
    <WhatsApp />
    <ShareButton /> */}
  </div>
);

export default DashboardPage;



// class DashboardPage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {display: false};
//       // This binding is necessary to make `this` work in the callback
//       this.showBlock = this.showBlock.bind(this);
//       //   const comp = '<'+this.props.comp+'>';
//   }

//   showBlock() {
//       this.setState((state) => ({
//         display: !state.display
//       }));
//     }

//     render() {
//       return (
//         <div>
//             <div className="box-layout-projects">
//               <Header />
//               <div >
//                   {/* <h1 className="box-layout-projects__title">PROJECTS</h1> */}
//                   {/* <h3 className="show-for-mobile box-layout-projects__h3">(touch-me)</h3> */}
//                   <div className="content-container project-align-view">
//                       <Project name="Materials" description="This link will provide you materials" link="materials" comp={<Materials />} />
//                       <Project name="Materials" description="This link will provide you materials" link="materials" comp={<Materials />} />
//                       <Project name="Materials" description="This link will provide you materials" link="materials" comp={<Materials />} />
//                       <Project name="Materials" description="This link will provide you materials" link="materials" comp={<Materials />} /> 
//                   </div>
//                   { this.state.display ? 
//                       <div className="project-align-view">
//                         <p>Will add more projects soon...</p>
//                       </div>
//                       : null }
//                   {/* { 
//                     this.state.display ? 
//                     <div className="button-more-projects" onClick={this.showBlock}>View Less</div> :
//                     <div className="button-more-projects" onClick={this.showBlock}>View More Projects</div>
//                   } */}
//               </div>
//             </div>
//         </div>
//       );
//   }
// };




