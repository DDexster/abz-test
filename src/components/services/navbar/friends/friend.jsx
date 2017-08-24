import React, {Component} from 'react';

import './friend.css';

class Friend extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const friend = this.props.friend;
        return(
            <div className="friend-item">
                <a href={friend.href}>
                    <p className="friend-name">{friend.name}</p>
                </a>
                <a href={friend.href}><img className="friend-logo" src={friend.image} alt={friend.name} /></a>
                <div className="desc">
                    <p className="creds-job">{friend.job}</p>
                    <p className="creds-place">{friend.place}</p>
                    <a href="https://linkedin.com" className="follow">Add Friend</a>
                </div>
            </div>
        );
    }
}

export default Friend;