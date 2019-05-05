import React from 'react';
import Modal from 'react-modal';

export default class Disclaimer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true
        };
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    };
    render(){
        return(
            <Modal
                isOpen={this.state.modalIsOpen}
                contentLabel="Disclaimer"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Disclaimer</h3>
                <p className="modal__body">VITHelper is not related to any official proceedings by VIT. It is an initiative by us to help the students with routine life at VIT. The information on the website consists of reviews collected from other students and is tried to keep as transparent as possible. Any content on this page is not aimed to directly or indirectly attack or defame any person but just to find the right solutions for the students. We try to keep the website updated with all the details. The website is in no way officially related to VIT and is not to be relied on for any official information.</p>
                <p className="modal__body">-The VITHelper Team</p>
                <button className="button" onClick={this.closeModal}>I understand</button>
            </Modal>
        );
    }
}
