import React, {Component} from 'react';
import Company from './compItem.jsx';
import divider from './assets/companies-separator.png';

import "./companies.css";

class Companies extends Component{

    render(){
        const companies = this.props.companies;
        const compItems = companies.map((company) => 
            <Company key={company.id} company={company} />
        );
        return(
            <div className="comp-items">
                <p className="sec-head">Featured Companies <a className="see-all" href="#">See All</a></p>
                {compItems}
                <img src={divider} alt="Divider" />
            </div>
        );
    }
}

export default Companies;