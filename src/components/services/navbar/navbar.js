import React, {Component} from 'react';
import Navs from './navs/navs.jsx';
import mocks from '../../../mocks/mock.js';
import './navbar.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            navs: mocks.navs,
        }
    }

    render(){
        return (
            <div className="navbar">
                <Navs navs={this.state.navs} />
            </div>
        );
    }
}

export default Navbar;