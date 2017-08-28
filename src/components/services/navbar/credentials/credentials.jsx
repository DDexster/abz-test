import React, {Component} from 'react';
import './credentials.css';

class Credentials extends Component{

    render(){
        return(
            <div className="credentials">
                <p className="copyright">Denteez Copyright 2015.</p>
                <p className="terms-pol">
                    <a href="#" className="terms">Terms of Use</a>
                    <a href="#" className="policy">Privacy Policy</a>
                </p>
            </div>
        )
    }
}

export default Credentials;