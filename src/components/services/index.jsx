import React, { Component } from 'react';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import NavbarRight from './navbar/navbarRight.jsx';
import ServicesContent from './servicesContent/services.jsx';

import './index.css';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return ( 
            <div>
                <Header / >
                <div className = "services-main-container">
                    <Navbar />
                    <NavbarRight />
                    <ServicesContent />
                </div> 
            </div>
        );
    }
}

export default Services;