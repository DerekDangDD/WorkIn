import React from 'react';
import Navigation from './Navigation';

import './style.css';

var divStyle = {
    fontSize: "xxx-large",
  };

const About = () => {
    return (
        <div>
            <Navigation />
            <div className="app">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={divStyle}>
                    Why workout when you can <b>WORK-IN</b>?
                </div>
            </div>
        </div>
    );
}

export default About;