import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

import './imagePreview.css';

class ImagePreview extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    

    render(){
        return(
            <div className="form-image-preview">
                <Icon circular 
                      inverted 
                      className="close-button" 
                      name="close" 
                      onClick={() => this.props.onDelete(this.props.name)} />
                <img src={this.props.preview} alt={this.props.name} />
            </div>
        );

    }

}

export default ImagePreview;