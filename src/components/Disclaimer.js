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
                <p className="modal__body">VITHelper is not affliated to VIT University. We created this website to assist students in preparing time tables before course registration. PLease note that VITHelper is not the most reliable source for any content in the course regitration process. We are glad you find this tool but we strongly advice to refer to refer other resources.</p>
                <p className="modal__body">-The VITHelper Team</p>
                <button className="button" onClick={this.closeModal}>I understand</button>
            </Modal>
        );
    }
}
