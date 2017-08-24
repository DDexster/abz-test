import React, { Component } from 'react';
import Header from './header/header.js';
import Navbar from './navbar/navbar.js';
import NavbarRight from './navbar/navbarRight.jsx';

import './index.css';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Header />
                <div className="container">
                    <Navbar />
                    <NavbarRight />
                </div>
            </div>
        );
    }
}

export default Services;