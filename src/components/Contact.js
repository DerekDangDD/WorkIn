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
                    Services
                </div>
            </div>
        );
    }
}

export default Contact;