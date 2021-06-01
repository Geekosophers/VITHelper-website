import React from 'react';

export class FaqsListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this);
        this.state = {
            count: false,
            url:''
        };
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
        this.state = {
            url: ''
        };
    }

    render() {
        return(
            <div className="doc-view__links ">
                <div>{this.props.faqLink}</div>
            </div>
        );
    }
}