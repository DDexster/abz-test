import React, {Component} from 'react';
import Navs from './navs/navs.jsx';
import Advertisement from './ads/advertisement.jsx';
import Companies from './companies/companies.jsx';
import Credentials from './credentials/credentials.jsx';
import mocks from '../../../mocks/mock.js';
import './navbar.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            navs: mocks.navs,
            ads: mocks.ads,
            companies: mocks.companies
        }
    }

    render(){
        return (
            <div className="navbar">
                <Navs navs={this.state.navs} />
                <Advertisement ad={this.state.ads[0]} />
                <Companies companies={this.state.companies} />
                <Credentials />
            </div>
        );
    }
}

export default Navbar;