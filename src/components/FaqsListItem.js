import React from 'react';
import { storage } from '../firebase/firebase';

export class FaqsListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this);
        // this.handleUrl = this.handleUrl.bind(this);
        this.state = {
            count: false,
            url:''
        };
    }

    // handleUrl(){
    //     const image = this.state;
    //     // {<div>Hello</div>}
    //     var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.faq.comments[0]}.pdf`);
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
        return(
            <div>
                {/* <div>{this.handleUrl()}</div> */}
                <div className="list-item"  onClick={this.handleComments}>
                    <div className="button2 button--link">{this.props.faq.question}</div>
                    {
                        this.state.count && <FaqComment key={this.props.faq.question} faqLink={this.props.faq.answer}/>
                    }
                </div>
            </div>
        );
    }
}

class FaqComment extends React.Component {

    constructor(props){
        super(props); 
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            url: ''
        };
    }

    // handleChange(e) {
    //     const image = this.state;
    //     var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.commentText}.pdf`);
    //     gsReference.getDownloadURL().then(function(url) {
    //         image.url=url;
    //         // console.log("url"+image.url);
    //       });
    // }

    render() {
        return(
            <div className="doc-view__links ">
                <div>{this.props.faqLink}</div>
            </div>
        );
    }
}