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
                    <h3 className="modal__title show-for-desktop" >New video is up on YouTube</h3>
                    <h3 className="modal__title show-for-mobile" >New Video is up on YouTube</h3>
                    <div className="modal__body">
                        <p className="show-for-desktop">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/5yrZA9BxvK4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </p>
                        <p className="show-for-mobile">
                            <iframe width="100%" src="https://www.youtube.com/embed/5yrZA9BxvK4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </p>
                    </div>
                    <div className="modal__footer">
                        <div className="button--link"><a href="https://youtu.be/5yrZA9BxvK4">Watch Now!</a></div>
                        <div className="button--link show-for-desktop" onClick={this.closeModal} style={{ cursor: 'pointer' }}>Maybe Later</div>
                        <div className="button--link show-for-mobile" onClick={this.closeModal} style={{ cursor: 'pointer' }}>Maybe Later</div>
                    </div>
                </Modal>
            </div>
        );
    }
}
