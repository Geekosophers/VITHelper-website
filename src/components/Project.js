import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
    // This binding is necessary to make `this` work in the callback
    this.showBlock = this.showBlock.bind(this);
    const comp = '<'+this.props.comp+'>';
  }

  showBlock() {
    this.setState((state) => ({
      display: !state.display
    }));
  }

  iOS() {

    var iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];
  
    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){ return true; }
      }
    }
    return false;
  }

  render() {
    return (
      <div  style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
        <Link className={"show-for-desktop box-layout-projects__box "+this.props.link} to={'/'+this.props.link}>
          <div className="box-layout-projects__box-text">
            {/* <h3>{this.props.name}</h3> */}
            {/* <p>{this.props.description}</p> */}
          </div>
          <div>
            <img src="./images/book.png" height="20px" width="20px"/>
            <span className="header__title">  {this.props.name}</span>
          </div>
        </Link>
        { this.iOS() ? 
          // <p> iOS</p>
          <div className={"show-for-mobile box-layout-projects__box "+this.props.link} onClick={this.showBlock}>
            <div className="box-layout-projects__box-text">
              {/* <h2>{this.props.name}</h2>
              <p>{ (this.props.name=='perspective-homography-opencv' || this.props.name=='auto-facebook-birthday-wish' || this.props.name=='Breakout_DCQN') ? null : this.props.description}</p>
              <p><u>Touch for more info</u></p> */}
            </div>
            <div>
              <img src="./images/book.png" height="20px" width="20px"/>
              <span className="header__title">  {this.props.name}</span>
            </div>
          </div>
          :
          // <p>NOT iOS</p>
          <div className={"show-for-mobile box-layout-projects__box "+this.props.link} onMouseEnter={this.showBlock} onClick={this.showBlock}>
            <div className="box-layout-projects__box-text">
              {/* <h2>{this.props.name}</h2>
              <p>{ (this.props.name=='perspective-homography-opencv' || this.props.name=='auto-facebook-birthday-wish' || this.props.name=='Breakout_DCQN') ? null : this.props.description}</p>
              <p><u>Touch for more info</u></p> */}
            </div>
            <div>
              <img src="./images/book.png" height="20px" width="20px"/>
              <span className="header__title">  {this.props.name}</span>
            </div>
          </div>
        }
        <div>{ this.state.display ? this.props.comp : null }</div>
        {/* <div >
          <ProjectContent />
        </div> */}
      </div>
    );
  }
};

  



// const Project = (props) => (
//   function showBlock(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }
//   <div>
//     <Link className={"box-layout__box "+props.link} to={'/'+props.link}>
//         <div className="box-layout__box-text">
//           <h1>{props.name}</h1>
//           <p>{props.description}</p>
//         </div>
//     </Link>
//     <div className={"box-layout__box "+props.link} onClick={showBlock}>
//       <div className="box-layout__box-text">
//           <h1>{props.name}</h1>
//           <p>{props.description}</p>
//       </div>
//     </div>
//     <div className="project-onButtonClick">
//       <ProjectContent />
//     </div>
//   </div>
// );

export default Project;

