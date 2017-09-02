import React, {Component} from 'react';
import divider from './assets/nav-separator.png';

import './nav.css';

class Nav extends Component{

    render(){
        return(
            <a href="#" className="service-nav-item">
                <img className="service-image" src={this.props.ico} alt={this.props.service} />
                <p>{this.props.service}</p>
                <img className="nav-hr" src={divider} alt="Divider" />
            </a>  
        );
    }
}

export default Nav;