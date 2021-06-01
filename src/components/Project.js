import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
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
          </div>
          <div>
            <img src="./images/book.png" height="20px" width="20px"/>
            <span className="header__title">  {this.props.name}</span>
          </div>
        </Link>
        { this.iOS() ? 
          <div className={"show-for-mobile box-layout-projects__box "+this.props.link} onClick={this.showBlock}>
            <div className="box-layout-projects__box-text">
            </div>
            <div>
              <img src="./images/book.png" height="20px" width="20px"/>
              <span className="header__title">  {this.props.name}</span>
            </div>
          </div>
          :
          <div className={"show-for-mobile box-layout-projects__box "+this.props.link} onMouseEnter={this.showBlock} onClick={this.showBlock}>
            <div className="box-layout-projects__box-text">
            </div>
            <div>
              <img src="./images/book.png" height="20px" width="20px"/>
              <span className="header__title">  {this.props.name}</span>
            </div>
          </div>
        }
        <div>{ this.state.display ? this.props.comp : null }</div>
      </div>
    );
  }
};

export default Project;