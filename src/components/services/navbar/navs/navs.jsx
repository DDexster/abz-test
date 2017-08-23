import React, { Component } from 'react';
import Nav from './nav.jsx';

import "./navs.css";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navs = this.props.navs;
        const navItems = navs.map((nav) =>
            <Nav key = { nav.id } ico = { nav.ico } service = { nav.service } />
        );
        return ( 
            <div className = "navs" > 
                { navItems } 
            </div>
        );
    }
}

export default Navigation;