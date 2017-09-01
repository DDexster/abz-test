import React, { Component } from 'react';
import background from '../assets/back-sec-2.png';
import FormBox from './formBox.jsx';

import './formSection.css';

class FormSection extends Component {
    constructor(props){
        super(props);
        this.style = {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition:  'fixed',
            height: '816px'
        }
    }

    render(){
        return(
            <section className="form-section" style={this.style}>
                <FormBox />
            </section>
        );

    }

}

export default FormSection;