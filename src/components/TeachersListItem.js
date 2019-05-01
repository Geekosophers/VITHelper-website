import React from 'react';

export class TeachersListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleComments = this.handleComments.bind(this); 
        this.state = {
            count: false
        };
    }
    handleComments(e) {
        this.setState((prevState) => {
            return{
                count:!prevState.count
            };            
        });
    }
    render(){
        return(
            <div className="list-item">
                <button className="button2 button--link" onClick={this.handleComments}>{this.props.teacher.name}</button>
                {console.log(this.state.count)}
                {
                   this.state.count && this.props.teacher.comments.map((comment) => <TeacherComment key={comment} commentText={comment}/>)
                }
            </div>
        );
    }
}

class TeacherComment extends React.Component {
    render() {
        return(
            <div>
                <li>{this.props.commentText}</li>
            </div>
        );
    }
}