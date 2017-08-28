import React, {Component} from 'react';
import Product from './product.jsx';

import "./products.css";

class Products extends Component{

    render(){
        const prodItems = this.props.products.map((product) => 
           <Product key={product.id} product={product} /> 
        );
        return(
            <div className="product-items">
                <p className="sec-head">Featured Products <a className="see-all" href="#">See All</a></p>
                {prodItems}
                <img src="./assets/companies/companies-separator.png" alt="Separator" />
            </div>
        );
    }
}

export default Products;