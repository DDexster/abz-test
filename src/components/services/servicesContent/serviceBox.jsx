import React, { Component } from 'react';
import Service from './service.jsx';

import './serviceBox.css';

class ServiceBox extends Component {

    render(){
        const services = this.props.services.map(service => 
            <Service key={service.id} service={service} />
        );
        return(
            <div className="services">
                <div className="service-directory">
                    <p>Service Directory</p>
                    <button className="add-service">Add New Service</button>
                </div>
                <div className="service-box">
                    {services}
                </div>
            </div>
        );

    }

}

export default ServiceBox;