import React, {Component} from 'react';
import logo from './assets/Logo.png';
import searchIco from './assets/Search.png';
import chatIco from './assets/Chat.png';
import notificationIco from './assets/Notifications.png';
import userPic from './assets/UserPic.png'

import './header.css';

class Header extends Component {

    render(){
        return (
            <header className="nav">
                <nav className="container">
                    <li className="logo">
                        <a href="#"><img src={logo} alt="Denteez logo" /></a>
                    </li>
                    <li className="search">
                        <img className="search-ico" src={searchIco} alt="Search" />
                        <input type="text" placeholder="Company Name" />
                    </li>
                    <li className="user-iteration">
                        <a href="#"><img src={chatIco} alt="Chat" /></a>
                        <a href="#"><img src={notificationIco} alt="Notification" /></a>
                        {/* TODO: Make user as component */}
                        <a href="#" className="user">
                            <img src={userPic} alt="User" />
                            <span className="username">Maximillian Beekeeper</span>
                        </a>
                    </li>
                </nav>
            </header>
        );
    }
}

export default Header;