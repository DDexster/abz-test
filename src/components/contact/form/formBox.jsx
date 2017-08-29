import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './formBox.css';

class FormBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            enquiryTypes: [],
            type: "Other"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    
    componentWillMount() {
        const URL = "http://504080.com/api/v1/directories/enquiry-types";
        const OPTIONS = {
            "method": "GET"
        };
        fetch(URL, OPTIONS).then( response => {
            return response.json();
        }).then( result => {
            if (result.success) {
                const enquiryTypes = [];
                result.data.map((option, index) => {
                    enquiryTypes.push({
                        text: option.name,
                        value: option.name
                    })
                })
                this.setState({
                    enquiryTypes
                });
            }
        })
    }
    

    handleChange(e, {value, name}) {
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <form>
                <div className="form-box">
                    <Form>
                        <p className="form-head">
                            Fields marked "*" are required
                        </p>
                        <Form.Select label="Enquire Type" 
                                    name="type"
                                    defaultValue="Other"
                                    options={this.state.enquiryTypes} 
                                    onChange={this.handleChange} 
                                    required/>
                        { this.state.type === "Other" ? 
                            <Form.Input name="other-type" 
                                        placeholder="Other" 
                                        onChange={this.handleChange} 
                                        required/>
                                :
                            null
                        }   
                        <Form.Group widths='equal'>
                            <Form.Input label="Name" 
                                        name="name"
                                        placeholder="Dentist"
                                        type='text'
                                        onChange={this.handleChange}
                                        required />
                            <Form.Input label="Email"
                                        name="email"
                                        placeholder="rachelm@gmail.com"
                                        type='email'
                                        onChange={this.handleChange}
                                        required />
                        </Form.Group>
                        <Form.Input label="Subject" 
                                    name="subject"
                                    type='text'
                                    onChange={this.handleChange}
                                    required />
                        <Form.TextArea label="Description"
                                       name="describtion"
                                       rows="5"
                                       onChange={this.handleChange}
                                       required />
                    </Form>
                </div>
                <Button fluid color="green">Submit</Button>
            </form>
        );

    }

}

export default FormBox;