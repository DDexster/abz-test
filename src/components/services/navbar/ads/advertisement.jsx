import React, { Component } from 'react';

import './advertisement.css';

class Advertisement extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="ads">
                <p className="title">Advertisement</p>
                <a href={this.props.ad.href}><img src={this.props.ad.banner} alt="Advertisement" /></a>
                <p className="adv-maker">Ads By Denteez.com</p>
                <img src="./assets/ads/adv-separator.png" alt="Separator" />
            </div>
        );
    }
}

export default Advertisement;