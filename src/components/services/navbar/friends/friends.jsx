import React, {Component} from 'react';
import Friend from './friend.jsx';

import "./friends.css";

class Friends extends Component{

    render(){
        const friends = this.props.friends;
        const friendsItems = friends.map((friend) => 
            <Friend key={friend.id} friend={friend} />
        );
        return(
            <div className="friend-items">
                <p className="sec-head">People you may know <a className="see-all" href="#">See All</a></p>
                {friendsItems}
                <img src="./assets/companies/companies-separator.png" alt="Separator" />
            </div>
        );
    }
}

export default Friends;