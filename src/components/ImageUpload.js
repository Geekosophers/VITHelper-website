import React, {Component} from 'react';
import { storage } from '../firebase/firebase';

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state={ 
            pdfs: ['DA-1 (Answer) - Final','DA-1 (Answer)']
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        var gsReference = storage.refFromURL(`gs://vithelper-32e0b.appspot.com/images/${this.state.pdfs[1]}.pdf`)
        gsReference.getDownloadURL().then(function(url) {
            var img = document.getElementById('mypdf');
            img.src = url;
          });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleChange}>Subject1</button>
                <button onClick={this.handleChange}>Subject2</button>
                <button onClick={this.handleChange}>Subject3</button>
            </div>
        )
    }
}

export default ImageUpload;