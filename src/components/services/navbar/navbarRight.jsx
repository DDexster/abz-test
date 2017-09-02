import React, { Component } from "react";
import Friends from './friends/friends.jsx';
import Products from "./products/products.jsx";
import Advertisement from './ads/advertisement.jsx';
import ads from './ads/assets/ad-mock.js';
import friends from './friends/assets/userMock.js';
import products from './products/assets/productMock.js';


import './navbarRight.css';

class NavRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: friends,
            products: products,
            ad: ads[1]
        }
    }

    render() {
        return ( 
            <div className = "nav-right" >
            <Friends friends = { this.state.friends } /> 
            <Products products = { this.state.products } /> 
            <Advertisement ad= { this.state.ad } separator={false}/>
            </div>
        );
    }
}

export default NavRight;