import React, { Component } from 'react';
import { Modal, Icon, Header } from 'semantic-ui-react';


class FormModal extends Component {

    render(){
        console.log(this.props.data);
        return(
            <Modal defaultOpen basic style={{'text-align':'center'}}>
                { this.props.success ? 
                    <Icon name="checkmark" color="green" size="huge" />
                :
                    <Icon name="warning sign" color="red" size="huge" />
                }
                <Modal.Content>
                    { this.props.success ? 
                        ( <Header style={{'color':'white'}}>
                             {this.props.data.data.message}
                          </Header>)
                    :
                        (
                            <div style={{'color':'white'}}>
                                <Header>
                                    {this.props.data.error.message} 
                                </Header>
                                <p>{this.props.data.error.description}</p>
                            </div>
                        )
                    }
                </Modal.Content>
            </Modal>
        );

    }

}

export default FormModal;