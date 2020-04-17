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
                        <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2020/04/09/19/19/cartoon-doctor-5022797_960_720.jpg" />
                        <div className="content">
                        <a className="header">Derek</a>
                        <div className="description">bobtestpizza001@gmail.com</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2016/03/16/11/52/adult-1260380_960_720.jpg" />
                        <div className="content">
                        <a className="header">Johnny</a>
                        <div className="description">johnny@ualberta.ca</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2018/04/29/11/14/portrait-3359641_960_720.png" />
                        <div className="content">
                        <a className="header">Paul</a>
                        <div className="description">paul@gmail.com</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2017/12/15/18/21/man-3021500_960_720.jpg" />
                        <div className="content">
                        <a className="header">Alex</a>
                        <div className="description">alex@gmail.com</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2018/10/14/22/25/youtube-3747682_960_720.jpg" />
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