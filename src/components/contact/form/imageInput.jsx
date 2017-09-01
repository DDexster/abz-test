import React, { Component } from 'react';
// import PreviewBox from './imagePreview.jsx';
import ImagePreview from './imagePreview.jsx';

import './imageInput.css';

class ImageInput extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.inputElement.click();
    }

    initPreviews(previews) {
        this.props.photos.map((photo, index) => 
            previews.push(<ImagePreview key={index} 
                                        preview={photo.preview} 
                                        name={photo.name} 
                                        onDelete={this.props.onDelete}  />)
        );
    }


    render(){
        const previews = [];
        this.initPreviews(previews);
        
        return(
            <div className="form-image-field">
                <div className="form-image-input" onClick={this.handleClick}>
                    <p className="image-input-title">Add photo</p>
                    <p className="image-input-text">Minimum size of 300x300 jpeg jpg png 5 MB</p>
                    <input type="file" 
                           accept="image/*" 
                           style={{"display":"none"}}
                           ref={input => this.inputElement = input} 
                           onChange={(e) => this.props.handleImage(e)} />
                </div>
                { previews }
            </div>
        );

    }

}

export default ImageInput;