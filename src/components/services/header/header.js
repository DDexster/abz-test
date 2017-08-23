import React, {Component} from 'react';

import './header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.statr = {

        }
    }

    render(){
        return (
            <header className="nav">
                <nav className="container">
                    <li className="logo">
                        <a href="#"><img src="./assets/header/Logo.png" alt="Denteez logo" /></a>
                    </li>
                    <li className="search">
                        <img className="search-ico" src="./assets/header/Search.png" alt="Search" />
                        <input type="text" placeholder="Company Name" />
                    </li>
                    <li className="user-iteration">
                        <a href="#"><img src="./assets/header/Chat.png" alt="Chat" /></a>
                        <a href="#"><img src="./assets/header/Notifications.png" alt="Notification" /></a>
                        {/* TODO: Make user as component */}
                        <a href="#" className="user">
                            <img src="./assets/header/UserPic.png" alt="User" />
                            <span className="username">Maximillian Beekeeper</span>
                        </a>
                    </li>
                </nav>
            </header>
        );
    }
}

export default Header;