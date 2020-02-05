import React from 'react';
import { storage } from '../firebase/firebase';

export class Cat1papersListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.state = {
            count: false,
            url:''
        };
    }

    handleUrl(){
        const image = this.state;
        var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.cat1paper.file_name}.pdf`);
        gsReference.getDownloadURL().then(function(url) {
            image.url=url;
            // console.log("url"+image.url);
          });
    }

    handleComments(e) {
        this.setState((prevState) => {
            return{
                count:!this.state.count
            };            
        });
    }
    
    render(){
        return(
            <div>
                <div>{this.handleUrl()}</div>
                <div className="list-item"  onClick={this.handleComments}>
                    <div className="button2 button--link list_papers">
                        <div className="list_papers-name">{this.props.cat1paper.name[0]}</div>
                        <div className="list_papers-code">
                            <div className="list_papers-slot">{this.props.cat1paper.name[2] && <span>Slot -</span>} {this.props.cat1paper.name[2]}</div>
                            <div>{this.props.cat1paper.name[1]}</div>
                        </div>
                    </div>
                    {
                        this.state.count && <Cat1paperComment key={this.props.cat1paper.name} commentText={this.state.url}/>
                    }
                </div>
            </div>
        );
    }
}

class Cat1paperComment extends React.Component {

    constructor(props){
        super(props); 
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            url: ''
        };
    }

    handleChange(e) {
        const image = this.state;
        var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.commentText}.pdf`);
        gsReference.getDownloadURL().then(function(url) {
            image.url=url;
            // console.log("url"+image.url);
          });
    }

    render() {
        return(
            <div className="doc-view__links">
                {/* <embed src={} className="doc-view" /> */}
                <a href={this.props.commentText} target="_blank"><button className="button">View Paper</button></a>
                {/* <a href="whatsapp://send?text=http://www.vithelper.in/"><button className="show-for-mobile button button__share">Share</button></a> */}
                {/* <button className="show-for-desktop button button__share">Share Paper</button> */}
            </div>
        );
    }
}