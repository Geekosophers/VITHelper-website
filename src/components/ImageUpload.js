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




/*

import React, {Component} from 'react';
// import {storage} from '../firebase';
import { storage } from '../firebase/firebase';

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state={ 
            image: null,
            url:'',
            progress:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        // if(e.target.files[0]){
        //     const image = e.target.files[0];
        //     this.setState(() => ({image}) );
        // }
        storage.child('images/DA-1 (Answer) - Final.pdf').getDownloadURL().then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'
          
            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
              var blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
          
            // Or inserted into an <img> element:
            // var img = document.getElementById('myimg');
            // img.src = url;
          });
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100);
            this.setState({progress});
        }, 
        (error) => {
            console.log(error);
        }, 
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

    render() {
        return(
            <div>
                <progress value={this.state.progress} max="100" />
                <br />
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br />
                <img src={this.state.url || 'https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/'} alt="Uploaded Image" height="300" width="400"/>
            </div>
        )
    }
}

export default ImageUpload;


*/