import React, { Component } from 'react';
import {Modal, Icon, Header} from 'semantic-ui-react';

import './warningModal.css';

class WarningModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: true,
            }
        };
       

    render(){
        return(
            <Modal defaultOpen basic>
                <Header>
                    <Icon name="warning sign" color="red" />
                    {this.props.error.message}
                </Header>
                <Modal.Content>
                    <p>{this.props.error.description}</p>
                </Modal.Content>
            </Modal>
        );

    }

}

export default WarningModal;