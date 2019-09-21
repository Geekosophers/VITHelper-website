import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export class MatPaperButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 2,
        };
    }

    handleClick(e) {
        this.setState((prevState) => {
            return{
                count:(this.state.count+1)%2
            };            
        });
    }
    
    render(){
        return(
            <div>
                <span className="show-for-mobile button-matpap__disp">
                    {/* <Link to="/cat1papers"><button className="button--link__bl" >{window.location.pathname=="/cat1papers"? <u>CAT-1 Papers</u>:<span>CAT-1 Papers</span>}</button></Link> | 
                    <Link to="/cat2papers"><button className="button--link__bl" >{window.location.pathname=="/cat2papers"? <u>CAT-2 Papers</u>:<span>CAT-2 Papers</span>}</button></Link> */}
                    <div className="button button--link">
                        {   this.state.count!=1 ?
                            (
                                window.location.pathname=="/materials"?<span>Materials</span> : null ||
                                window.location.pathname=="/cat1papers"?<span>CAT-1 Papers</span> : null ||
                                window.location.pathname=="/cat2papers"?<span>CAT-2 Papers</span> : null ||
                                window.location.pathname=="/fatpapers"?<span>FAT Papers</span> : null
                            )
                            :
                            (<span>MENU:</span> )
                        }
                    </div>
                    {
                        this.state.count==2 && 
                        <div className="ham" onClick={this.handleClick}>
                            <div className="ham__div"></div>
                            <div className="ham__div"></div>
                            <div className="ham__div"></div>
                        </div>
                    }
                    {
                        this.state.count==1 && 
                        <div className="ham" onClick={this.handleClick}>
                            <div className="ham__div1"></div>
                            <div className="ham__div2"></div>
                            <div className="ham__div3"></div>
                        </div>
                    } 
                    {
                        this.state.count==0 && 
                        <div className="ham" onClick={this.handleClick}>
                            <div className="ham__div11"></div>
                            <div className="ham__div22"></div>
                            <div className="ham__div33"></div>
                        </div>
                    }  
                </span>
                {/* <p>{this.state.count}</p> */}
                {this.state.count==1 &&
                    <div className="ham__nav">
                        <Link to="/cat1papers" className="button button--link">CAT-1 Papers</Link>
                        <Link to="/cat2papers" className="button button--link">CAT-2 Papers</Link>
                        <Link to="/fatpapers" className="button button--link">FAT Papers</Link>
                        <Link to="/materials" className="button button--link">Materials</Link>
                    </div>
                }
                {this.state.count==0 &&
                    <div className="ham__nav1">
                        <Link to="/cat1papers" className="button button--link">CAT-1 Papers</Link>
                        <Link to="/cat2papers" className="button button--link">CAT-2 Papers</Link>
                        <Link to="/fatpapers" className="button button--link">FAT Papers</Link>
                        <Link to="/materials" className="button button--link">Materials</Link>
                    </div>
                }
            </div>
        );
    }
}


// const MatPaperButton = () => (
//     <div>
//         <span className="show-for-mobile button-matpap__disp">
//             {/* <Link to="/cat1papers"><button className="button--link__bl" >{window.location.pathname=="/cat1papers"? <u>CAT-1 Papers</u>:<span>CAT-1 Papers</span>}</button></Link> | 
//             <Link to="/cat2papers"><button className="button--link__bl" >{window.location.pathname=="/cat2papers"? <u>CAT-2 Papers</u>:<span>CAT-2 Papers</span>}</button></Link> */}
//             <div className="dropdown">
//                 <div className="ham">
//                     <div className="ham__div"></div>
//                     <div className="ham__div"></div>
//                     <div className="ham__div"></div>
//                 </div>
//                 <div className="dropdown-content">
//                     <Navigation />
//                     {/* <Link to="/cat1papers" className="button button--link">CAT-1</Link>
//                     <Link to="/cat2papers" className="button button--link">CAT-2</Link>
//                     <Link to="/fatpapers" className="button button--link">FAT</Link> */}
//                 </div>
//             </div>
//         </span>
//     </div>
// );

// export default MatPaperButton;