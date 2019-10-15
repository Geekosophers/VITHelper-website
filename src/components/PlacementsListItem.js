import React from 'react';
import { storage } from '../firebase/firebase';

export class PlacementsListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this);
        // this.handleUrl = this.handleUrl.bind(this);
        this.state = {
            count: false,
            url:'',
            length: 0
        };
    }

    // handleUrl(){
    //     const image = this.state;
    //     var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.placement.comments[0]}.pdf`);
    //     gsReference.getDownloadURL().then(function(url) {
    //         image.url=url;
    //         // console.log("url"+image.url);
    //       });
    // }

    handleComments(e) {
        this.setState((prevState) => {
            return{
                count:!this.state.count
            };            
        });
    }
    
    render(){
        console.log(this.props);
        return(
            <div>
                {/* <div>{this.handleUrl()}</div> */}
                <div className="list-item">
                    {/* <div style={{display:'flex',justifyContent:'center'}}>{this.props.fatpaper.name}</div> */}
                    <div><b>Name: </b>{this.props.placement.name}</div>
                    <div><b>Company Name: </b>{this.props.placement.companyName}</div>
                    <div><b>Package: </b>{this.props.placement.packages}</div>
                    <div><b>CGPA: </b>{this.props.placement.cgpa}</div>
                    <div><b>Your Branch: </b>{this.props.placement.branch}</div>
                    <div><b>Number of rounds that were conducted: </b>{this.props.placement.noOfRounds}</div>
                    <div><b>Please describe all the individual rounds: </b></div>
                    <div>{this.props.placement.individualDescription[0]}</div>
                    <div>{this.props.placement.individualDescription[1]}</div>
                    {   !this.state.count && 
                        <div className="right-align" onClick={this.handleComments}>
                            <div className="button2 button--link2">Read full Article</div>  
                        </div>
                    }
                    {
                        this.state.count &&
                        <div>
                            <PlacementComment key={this.props.placement.name} placement={this.props.placement}/>
                            <div className="right-align" onClick={this.handleComments}>
                                <div className="button2 button--link2"><div>Show Less</div></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

class PlacementComment extends React.Component {

    render() {
        return(
            <div>
                <div>{this.props.placement.individualDescription[2]}</div>
                <div>{this.props.placement.individualDescription[3]}</div>
                <div>{this.props.placement.individualDescription[4]}</div>
                <div>{this.props.placement.individualDescription[5]}</div>
                <div>{this.props.placement.individualDescription[6]}</div>
                <div>{this.props.placement.individualDescription[7]}</div>
                <div>{this.props.placement.individualDescription[8]}</div>
                <div>{this.props.placement.individualDescription[9]}</div>
                <div><b>How did you prepare for the company? Please provide any resource that can be useful for the readers: </b>{this.props.placement.preparation}</div>
                <div><b>Date of selection: </b>{this.props.placement.date}</div>
                <div><b>Any generic advice: </b>{this.props.placement.advice}</div>
                {/* <a href={this.props.commentText} target="_blank"><button className="button">View Placement</button></a> */}
            </div>
        );
    }
}