import React, { Component } from 'react';
import HeaderSection from './header/header.jsx';
import FormSection from './form/formSection.jsx';
import AboutSection from './about/aboutSection.jsx';
import Footer from './footer/footer.jsx';

import './semantic.min.css';
import './index.css';


class ContactUs extends Component {

    render(){
        return(
            <div className="contuct-us">
                <HeaderSection />
                <FormSection />
                <AboutSection />
                <Footer />
            </div>
        );

    }

}

export default ContactUs;