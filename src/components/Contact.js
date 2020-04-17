import React from 'react';
import Navigation from './Navigation';
import './style.css';

const DEFAULT_MOOD = 'happy';

class Contact extends React.Component {
    state = {
        mood: DEFAULT_MOOD
    };

    componentDidMount() {
        this.setState({mood: DEFAULT_MOOD});
    }

    onClick = () => {
        if (this.state.mood !== 'shocked') {
            this.setState({mood: 'shocked'});
        } else {
            this.setState({mood: DEFAULT_MOOD});
        }
    }

    onMouseEnter = () => {
        this.setState({mood: 'blissful'});
    }

    onMouseLeave = () => {
        this.setState({mood: DEFAULT_MOOD});
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="app">
                <div className="ui massive list">
                    <br />
                    <div className="item">
                        <img className="ui avatar image" src="derek.png" />
                        <div className="content">
                        <a className="header">Derek</a>
                        <div className="description">bobtestpizza001@gmail.com</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="johnny.png" />
                        <div className="content">
                        <a className="header">Johnny</a>
                        <div className="description">johnny@ualberta.ca</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="paul.png" />
                        <div className="content">
                        <a className="header">Paul</a>
                        <div className="description">paul@gmail.com</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="alex.png" />
                        <div className="content">
                        <a className="header">Alex</a>
                        <div className="description">alex@gmail.com</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="liam.png" />
                        <div className="content">
                        <a className="header">Liam</a>
                        <div className="description">liam@gmail.com</div>
                        </div>
                    </div>
                </div>


                    
                </div>
            </div>
        );
    }
}

export default Contact;