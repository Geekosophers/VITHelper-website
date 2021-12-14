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
                    <h3 className="modal__title">Join VITHelper Team</h3>
                    <div className="modal__body">
                        <p>
                            Hey! I hope that you are finding the platform useful. I am working on different projects like this one with a team of amazing developers and looking for more. We have a lot of ideas to work which covers the following domains-
                            <span style={{ fontWeight: '700' }}>Image Processing, Machine Learning, App Dev, Web Dev, Writing blogs, Designers</span>
                        </p>
                        <p>If you want to know more fill the form and  I’ll connect with you.</p>
                        <p><span style={{ fontWeight: '700', color: '#e57670' }}><u>Note</u>- We have received many responses. Please be patient while we connect with you. Thankyou.</span></p>
                    </div>
                    <div className="modal__footer">
                        <div className="button--link"><a href="https://forms.gle/kMN9N6kzL5HaScvLA">Count me in!</a></div>
                        <div className="button--link show-for-desktop" onClick={this.closeModal} style={{ cursor: 'pointer' }}>Take me to the website</div>
                        <div className="button--link show-for-mobile" onClick={this.closeModal} style={{ cursor: 'pointer' }}>Not now</div>
                    </div>
                </Modal>
            </div>
        );
    }
}
