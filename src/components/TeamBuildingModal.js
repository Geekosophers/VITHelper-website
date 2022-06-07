import React from 'react';
import Modal from 'react-modal';

export default class TeamBuildingModal extends React.Component{
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
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Disclaimer"
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <h3 className="modal__title show-for-desktop" >VITHelper App</h3>
                    <h3 className="modal__title show-for-mobile" >VITHelper App</h3>
                    <div className="modal__body">
                        <a href="https://play.google.com/store/apps/details?id=com.geekosophers.vithelper&hl=en&gl=US">
                            <img src='./images/app.png' width='100%' />  
                        </a>
                    </div>
                    <div className="modal__footer">
                        <div className="button--link"><a href="https://play.google.com/store/apps/details?id=com.geekosophers.vithelper&hl=en&gl=US">Download Now</a></div>
                        <div className="button--link show-for-desktop" onClick={this.closeModal} style={{ cursor: 'pointer' }}>Maybe Later</div>
                        <div className="button--link show-for-mobile" onClick={this.closeModal} style={{ cursor: 'pointer' }}>Maybe Later</div>
                    </div>
                </Modal>
            </div>
        );
    }
}
