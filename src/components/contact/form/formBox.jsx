import React, { Component } from 'react';
import ImageInput from './imageInput.jsx';
import { Button, Form } from 'semantic-ui-react';

import './formBox.css';

class FormBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            enquiryTypes: [],
            type: "Other",
            describtion: '',
            photos:[]
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

    handleDeleteImage(imageName){
        const photos = this.state.photos.filter(photo => {
            return photo.name !== imageName;
        });
        this.setState({photos});
    }
    
    handleImageChange(event) {
        event.preventDefault();
        const MIN_WIDTH = 300;
        const MIN_HEIGHT = 300;
        const reader = new FileReader();
        const file = event.target.files[0];
        const photos = this.state.photos;
        if (file && this._isImage(file)) {
            reader.onloadend = () => {
                let img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    console.log("height", img.height, "width", img.width);
                    if (img.height >= MIN_HEIGHT && img.width >= MIN_WIDTH){
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
        if (name === "describtion"){
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

    _isImage(file) {
        if (file.type.match('image/(png|jpg|jpeg)?') && file.size <= 5242880000){
            return true
        }
        return false;
    }

    render(){
        const enquiryTypes = this.state.enquiryTypes;
        const type = this.state.type;
        const desc = this.state.describtion;
        const photos = this.state.photos;
        return(
            <div className="form-box">
                <Form>
                    <div className="white-box">
                        <p className="form-head">
                            Fields marked "*" are required
                        </p>
                        <Form.Select label="Enquire Type" 
                                    name="type"
                                    icon="chevron down small disabled"
                                    defaultValue="Other"
                                    options={enquiryTypes} 
                                    onChange={this.handleChange} 
                                    required/>
                        { type === "Other" ? 
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
                        <Form.Field>
                            <label htmlFor="describtion">Describtion <span style={{"color":"#db2828"}}>*</span><span className="form-counter">
                                    {desc.length}/1000
                                </span>
                            </label>
                            <Form.TextArea name="describtion"
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
                                {/* style={{"display": "none"}} /> */}
                </Form>
            </div>
        );

    }

}

export default FormBox;