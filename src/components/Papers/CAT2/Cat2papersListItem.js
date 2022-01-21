import React from 'react';
import { storage } from '../../../firebase/firebase';

export class Cat2papersListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleUrl = this.handleUrl.bind(this);
        this.state = {
            url:''
        };
    }

    handleUrl(){
        const image = this.state;
        var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.props.cat2paper.file_name}.pdf`);
        gsReference.getDownloadURL().then(function(url) {
            image.url=url;
            window.open( url, "_blank" );
          });
    }
    
    render(){
        return(
            <div>
                <div className="list-item">
                    <div className="button2 button--link list_papers">
                        <div className="list_papers-name">{this.props.cat2paper.name[0]}</div>
                        <div className="list_papers-code">
                            <div className="list_papers-slot">{this.props.cat2paper.name[2] && <span>Slot -</span>} {this.props.cat2paper.name[2]}</div>
                            <div>{this.props.cat2paper.name[1]}</div>
                        </div>
                    </div>
                    <div className="doc-view__links">
                        <button className="button" onClick={this.handleUrl}>
                            View Paper
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}