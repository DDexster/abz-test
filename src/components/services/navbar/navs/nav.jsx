import React, {Component} from 'react';

import './nav.css';

class Nav extends Component{

    render(){
        return(
            <a href="#" className="nav-item">
                <img className="service-image" src={this.props.ico} alt={this.props.service} />
                <p>{this.props.service}</p>
                <img className="nav-hr" src="./assets/navbar/nav-separator.png" alt="Separator" />
            </a>  
        );
    }
}

export default Nav;