import React, { Component } from 'react';
import HeaderSection from './header/header.jsx';
import FormSection from './form/formSection.jsx';

import './index.css';

class ContactUs extends Component {

    render(){
        return(
            <div className="contuct-us">
                <HeaderSection />
                <FormSection />
            </div>
        );

    }

}

export default ContactUs;