import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <div className="navigation-title"><h1>Social Exercise</h1></div>
                <div className="ui three column grid navigation">
                    <div className="column" />
                    <div className="ui five column grid">
                        <div className="column" />
                        <div className="column">
                            <div className="pad">
                                <NavLink exact to='/' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Home
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <div className="pad">
                                <NavLink exact to='/video' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Video
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <div className="pad">
                                <NavLink exact to='/about' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    About
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <div className="pad">
                                <NavLink exact to='/contact' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Contacts
                                </NavLink>
                            </div>
                        </div>
                        <div className="column" />
                    </div>
                    <div className="column" />
                </div>
            </div>
        );
    }
}

export default Navigation;