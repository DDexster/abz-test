import React, {Component} from 'react';

import "./service.css";

class Service extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const service = this.props.service;
        return(
            <div className="service-item">
                <img src={`http:${service.icon}`} alt={service.title} />
                <p className="service-title">{service.title}</p>
            </div>
        );
    }
}

export default Service;