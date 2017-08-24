import React, { Component } from "react";
import Friends from './friends/friends.jsx';
import Products from "./products/products.jsx";
import Advertisement from './ads/advertisement.jsx';
import mocks from "../../../mocks/mock.js";


import './navbarRight.css';

class NavRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: mocks.friends,
            products: mocks.products,
            ad: mocks.ads[1]
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