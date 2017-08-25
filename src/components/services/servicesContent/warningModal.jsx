import React, { Component } from 'react';
import Modal from 'react-modal';

import './warningModal.css';

class WarningModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: true,
            style: {
                overlay : {
                    position          : 'fixed',
                    top               : 0,
                    left              : 0,
                    right             : 0,
                    bottom            : 0,
                    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
                  },
                  content : {
                    position                   : 'absolute',
                    top                        : '40px',
                    left                       : '40px',
                    right                      : '40px',
                    bottom                     : '40px',
                    border                     : '1px solid #ccc',
                    background                 : '#fff',
                    overflow                   : 'auto',
                    WebkitOverflowScrolling    : 'touch',
                    borderRadius               : '4px',
                    outline                    : 'none',
                    padding                    : '20px'
                 
                  }
            }
          };
       
          this.openModal = this.openModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
     
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render(){
        console.log(this.props.error);
        return(
            <Modal className="warning-modal"
                   isOpen={this.state.modalIsOpen}
                   onRequestClose={this.closeModal}
                   style={this.state.style}
                   contentLabel={this.props.error.message}>

                <h3>{this.props.error.message}</h3>
                <div className="warning-content">
                    <img src="./assets/warning.png" alt="Warning" />
                    <p>{this.props.error.description}</p>
                </div>

            </Modal>
        );

    }

}

export default WarningModal;