import React, {Component} from 'react';
import Navs from './navs/navs.jsx';
import Advertisement from './ads/advertisement.jsx';
import Companies from './companies/companies.jsx';
import Credentials from './credentials/credentials.jsx';
import ads from './ads/assets/ad-mock.js';
import companies from './companies/assets/companyMock.js';
import navs from './navs/assets/navMock.js';

import './navbar.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            navs: navs,
            ad: ads[0],
            companies: companies
        }
    }

    render(){
        console.log(this.state.ad);
        return (
            <div className="navbar">
                <Navs navs={this.state.navs} />
                <Advertisement ad={this.state.ad} separator={true} />
                <Companies companies={this.state.companies} />
                <Credentials />
            </div>
        );
    }
}

export default Navbar;