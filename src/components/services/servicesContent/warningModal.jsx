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
            <Modal defaultOpen basic style={{'text-align':'center'}}>
                <Icon name="warning sign" color="red" size="huge" />
                <Modal.Content>
                    <Header content={this.props.error.message} style={{'color':'white'}} />
                    <p>{this.props.error.description}</p>
                </Modal.Content>
            </Modal>
        );

    }

}

export default WarningModal;