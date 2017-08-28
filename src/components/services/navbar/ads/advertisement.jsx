import React, { Component } from 'react';

import './advertisement.css';

class Advertisement extends Component{

    render() {
        const sep = <img src="./assets/ads/adv-separator.png" alt="Separator" />;
        return (
            <div className={`ads-${this.props.ad.id}`}>
                <p className="title">Advertisement</p>
                <a href={this.props.ad.href}><img src={this.props.ad.banner} alt="Advertisement" /></a>
                <p className="adv-maker">Ads By Denteez.com</p>
                { this.props.separator ? sep : null}
            </div>
        );
    }
}

export default Advertisement;