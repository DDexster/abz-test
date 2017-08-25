// variable isFetching = true - show animations, 
// after fetching check for response status and return a variable, that depends on it
import React, {Component} from 'react';
import ServiceBox from './serviceBox.jsx';
import WarningModal from './warningModal.jsx';  
import ReactLoading from 'react-loading';

import "./services.css";

class ServicesContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFetching: true,
            data: null,
            error: null
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        const URL = "http://504080.com/api/v1/services/categories";
        const OPTIONS = {
            method: 'GET',
            headers: {
                "Authorization": "038c7ed86fc3962b6c37f046c1e475976ccdee01"
            }
        };

        fetch(URL, OPTIONS).then(response => {
                return response.json();
            }).then(result => {
                if (result.success) {
                    this.setState({
                        isFetching: false,
                        data: result.data
                    });
                } else {
                    this.setState({
                        isFetching: false,
                        error: result.error
                    });
                }
            });
    }

    render(){
        let isFetching = this.state.isFetching;
        const serviceItems = this.state.data && !this.state.error ? 
            <ServiceBox services={this.state.data} />
        : 
            <WarningModal error={this.state.error} />;
        const loadingAnimation = <ReactLoading className="loading-animation" type="bubbles" color="#87b448" />;
        return(
            <div className="services-container">
                { isFetching ? loadingAnimation : serviceItems }
            </div>
        );
    }
}

export default ServicesContent;