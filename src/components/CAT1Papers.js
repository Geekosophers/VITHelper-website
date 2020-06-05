import React from 'react';
import Cat1papersList from './Cat1papersList';
import Cat1papersListFilter from './Cat1papersListFilter';
import WhatsApp from './WhatsApp';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import ShareButton from './ShareButton';

const CAT1Papers = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <Cat1papersListFilter />
    <Cat1papersList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default CAT1Papers;



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




