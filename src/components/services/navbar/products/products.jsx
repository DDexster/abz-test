import React, {Component} from 'react';
import Product from './product.jsx';
import divider from '../companies/assets/companies-separator.png';

import "./products.css";

class Products extends Component{

    render(){
        const prodItems = this.props.products.map((product) => 
           <Product key={product.id} product={product} /> 
        );
        return(
            <div className="product-items">
                <p className="product-sec-head">Featured Products <a className="see-all" href="#">See All</a></p>
                {prodItems}
                <img src={divider} alt="Divider" />
            </div>
        );
    }
}

export default Products;