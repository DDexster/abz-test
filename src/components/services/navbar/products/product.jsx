import React, { Component } from 'react';

import "./product.css";

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const product = this.props.product;
        return(
            <div className="product-item">
                <a href={product.href}>
                    <p className="product-name">{product.name}</p>
                </a>
                <a href={product.href}><img className="product-logo" src={product.image} alt={product.name} /></a>
                <div className="desc">
                    <p className="creds-description">{product.description}</p>
                    <p className="creds-text">{product.text}</p>
                </div>
            </div>
        );
    }
}

export default Product;