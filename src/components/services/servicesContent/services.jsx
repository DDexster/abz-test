// variable isFetching = true - show animations, 
// after fetching check for response status and return a variable, that depends on it
import React, {Component} from 'react';
import Service from './service.jsx';
import ReactLoading from 'react-loading';

import "./services.css";

class ServicesContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFetching: true,
            data: null
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
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    console.log("error", response.json());
                }
            }).then(json => {
                this.setState({
                    isFetching: false,
                    data: json.data
                });
                }
            )
    }

    // getItems() {
    //     this.fetchData();
    //     if (this.state.data) {
    //         this.setState({
    //             isFetching: false
    //         });
    //         return  this.state.data.map(service => 
    //             <Service key={service.id} service={service} />
    //         );
    //     }
    // }
    
    render(){
        let isFetching = this.state.isFetching;
        const serviceItems = this.state.data ? this.state.data.map(service => 
            <Service key={service.id} service={service} />
        ) : null;
        const loadingAnimation = <ReactLoading className="loading-animation" type="bubbles" color="#87b448" />;
        return(
            <div className="services-container">
                { isFetching ? loadingAnimation : serviceItems }
            </div>
        );
    }
}

export default ServicesContent;