import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Button, Segment, Divider, Icon } from 'semantic-ui-react';
import Services from './components/services/index.jsx';
import ContactUs from './components/contact/index.jsx';

import './router.css';

const services = () => (<Services />);

const contactUs = () => (<ContactUs />);

const home = () => (
    <div className="btn-container">
        <Segment padded>
            <Link to={`/services`}>
                <Button animated="fade" size="huge" color="green" fluid>
                    <Button.Content visible>Services page</Button.Content>
                    <Button.Content hidden><Icon name="grid layout"/></Button.Content>
                </Button>
            </Link>
            <Divider horizontal>Or</Divider>
            <Link to={`/contactUs`}>
                <Button animated="fade" size="huge" color="olive" fluid>
                <Button.Content visible>Contact us page</Button.Content>
                    <Button.Content hidden><Icon name="send outline"/></Button.Content>
                </Button>
            </Link>
        </Segment>
    </div>
);

const choice = () => (
    <Router>
        <div>
            <Route exact path="/" component={home} />
            <Route path='/services' component={services} />
            <Route path='/contactUs' component={contactUs} />
        </div>
    </Router>
)

 export default choice;


//  import React from 'react'
//  import { Segment, Button, Divider } from 'semantic-ui-react'
 
//  const DividerExampleHorizontal = () => (
//    <Segment padded>
//      <Button primary fluid>Login</Button>
//      <Divider horizontal>Or</Divider>
//      <Button secondary fluid>Sign Up Now</Button>
//    </Segment>
//  )
 
//  export default DividerExampleHorizontal