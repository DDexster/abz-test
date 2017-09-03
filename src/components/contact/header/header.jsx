import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';
import logo from '../assets/Logo.png';
import retinaLogo from '../assets/Logo@2x.png';
import background from '../assets/back-sec-1.png';

import './header.css';

class HeaderSection extends Component {
    constructor(props){
        super(props);
        this.style = {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition:  'fixed',
            height: '510px'
        }
    }

    render(){
        return(
            <section className="contact-header" style={this.style}>
                <div className="head">
                    <RetinaImage className="logo" src={[logo, retinaLogo]} alt="Logo" />
                    <button className="login-button">Log In Now</button>
                </div>
                <div className="contact-desc">
                    <p className="contact-title">Home of Dentistry</p>
                    <p className="contact-creds">
                        Denteez was created by dentists for dentistry in order to
                        make the life of everyone involved in dentistry easier.
                    </p>
                </div>
            </section>
        );

    }

}

export default HeaderSection;