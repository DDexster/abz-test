import React, { Component } from 'react';
import ImageInput from './imageInput.jsx';
import { Button, Form } from 'semantic-ui-react';
import FormModal from './formModal.jsx';

import './formBox.css';

class FormBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            enquiryTypes: [],
            type: 7,
            description: '',
            name: '',
            subject:'',
            photos:[],
            'other-type':'',
            submitResult: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                result.data.map((option, index) => (
                    enquiryTypes.push({
                        text: option.name,
                        value: index + 1
                    })
                ));
                this.setState({
                    loading: false,
                    enquiryTypes
                });
            }
        })
    }

    handleDeleteImage(imageName){
        const photos = this.state.photos.filter(photo => {
            return photo.name !== imageName;
        });
        this.setState({photos});
    }
    
    handleImageChange(event) {
        event.preventDefault();
        const MAX_WIDTH = 300;
        const MAX_HEIGHT = 300;
        const reader = new FileReader();
        const file = event.target.files[0];
        const photos = this.state.photos;
        if (file && this._isImage(file)) {
            reader.onloadend = () => {
                let img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    if (img.height <= MAX_HEIGHT && img.width <= MAX_WIDTH){
                        let fileObj={file, preview: reader.result, name: file.name};
                        photos.push(fileObj);
                        this.setState({photos});
                    }
                }
            }
            reader.readAsDataURL(file);
        }

    }

    handleChange(e, {value, name}) {
        if (name === "description"){
            if (value.length <= 1000){
                this.setState({
                    [name]: value
                });
            } 
        } else {
           this.setState({
                [name]: value
            });
        }
    }

    handleSubmit() {
        this.setState({loading: true});
        const data = this._makeFormData();
        const URL = "http://504080.com/api/v1/support";
        fetch(URL, {
            method: "POST",
            body: data,
            enctype: "multipart/form-data"
        }).then(response => response.json()).then(respData => {
            this.setState({
                loading: false,
                submitResult: respData
            })
        });
    }

    _makeFormData() {
        const data = new FormData();
        const department = this.state.type;
        const description = this.state.description;
        const email = this.state.email;
        const enquiry_type = this.state.type === 7 ? this.state['other-type'] : this.state.enquiryTypes[this.state.type - 1].text;
        const files = this.state.photos.map(photo => photo.file);
        const subject = this.state.subject;
        const user_name = this.state.name;
        data.append("department", department);
        data.append("description", description);
        data.append("email", email);
        data.append("enquiry_type", enquiry_type);
        if (files.length !== 0) {
            files.map(file => data.append("file", file));
        }
        data.append("subject", subject);
        data.append("user_name", user_name);
        return data;
    }

    _isImage(file) {
        const MAX_SIZE = 5120000000;
        if (file.type.match('image/(png|jpg|jpeg)?') && file.size <= MAX_SIZE){
            return true
        }
        return false;
    }

    render(){
        const enquiryTypes = this.state.enquiryTypes;
        const type = this.state.type;
        const desc = this.state.description;
        const photos = this.state.photos;
        const submit = this.state.submitResult ? true : false;
        return(
            <div className="form-box">
                <Form onSubmit={this.handleSubmit} loading={this.state.loading}>
                    <div className="white-box">
                        <p className="form-head">
                            Fields marked "*" are required
                        </p>
                        <Form.Select label="Enquiry Type" 
                                    name="type"
                                    icon="chevron down small disabled"
                                    placeholder="Other"
                                    options={enquiryTypes} 
                                    onChange={this.handleChange} 
                                    value={this.state.type}
                                    required />
                        { type === 7 ? 
                            <Form.Input name="other-type" 
                                        placeholder="Other" 
                                        onChange={this.handleChange} 
                                        value={this.state['other-type']}
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
                                        value={this.state.name}
                                        required />
                            <Form.Input label="Email"
                                        name="email"
                                        placeholder="rachelm@gmail.com"
                                        type='email'
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        required />
                        </Form.Group>
                        <Form.Input label="Subject" 
                                    name="subject"
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.subject}
                                    required />
                        <Form.Field>
                            <label htmlFor="description">Description <span style={{"color":"#db2828"}}>*</span><span className="form-counter">
                                    {desc.length}/1000
                                </span>
                            </label>
                            <Form.TextArea name="description"
                                            rows="8"
                                            onChange={this.handleChange}
                                            value={desc}
                                            required />
                        </Form.Field>
                        <Form.Field>
                            <ImageInput photos={photos} 
                                        handleImage={this.handleImageChange.bind(this)} 
                                        onDelete={this.handleDeleteImage.bind(this)} />
                        </Form.Field>
                    </div>
                    <Button className="form-submit" fluid>Submit</Button>
                </Form>
                { submit ? 
                    <FormModal success={this.state.submitResult.success} data={this.state.submitResult} />
                    :
                    null
                }

            </div>
        );

    }

}

export default FormBox;