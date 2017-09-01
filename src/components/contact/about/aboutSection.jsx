import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import './aboutSection.css';

class AboutSection extends Component {
    
    render(){
        return(
            <section className="about-section">
                <p className="about-title">
                    About Denteez
                </p>
                <Grid relaxed="very" divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <p className="about-text">
                                Why is it always so difficult to find what you are looking for in dentistry? Whether it is the latest advancement in technology or techniques or simply a review or understanding of the vast amount of products? Perhaps finding someone to just fix your broken equipment or simply hiring new staff or looking for that new job?
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p className="about-text">
                            Our mission is to give every dental professional the possibility to discuss and share all aspects of their profession, their practice and their business. We aim to make the world of dentistry easy and accessible, so every dental professional can find what they are looking for quickly and easily all in one place.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </section>
        );

    }

}

export default AboutSection;