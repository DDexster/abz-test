import React, { Component } from 'react';
import {Divider} from 'semantic-ui-react';

import './footer.css';

class Footer extends Component {

    render(){
        return(
            <footer>
                <Divider />
                <div className="footer-creds">
                    <p className="footer-copyright">
                        Denteez Copyright 2015
                    </p>
                    <ul className="footer-list">
                        <li>Support</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
            </footer>
        );

    }
}

export default Footer;