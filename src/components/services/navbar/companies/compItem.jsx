import React, {Component} from 'react';

import './compItem.css';

class Company extends Component{

    render(){
        const comp = this.props.company;
        return(
            <div className="comp-item">
                <a href={comp.href}><img className="comp-logo" src={comp.image} alt={comp.name} /></a>
                <div className="desc">
                    <a href={comp.href}>
                        <p className="company-title">{comp.name}</p>
                    </a>
                    <p className="creds-type">{comp.type}</p>
                    <p className="creds-place">{comp.place}</p>
                    <a href="https://linkedin.com" className="follow">Follow Now</a>
                </div>
            </div>
        );
    }
}

export default Company;