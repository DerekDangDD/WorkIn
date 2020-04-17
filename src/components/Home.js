import React from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import './style.css';
import Calendar from './Calendar';

class App extends React.Component {
    
    render() { 
        return (
            <div>
                <Navigation />
                <div className="app">
                    <Calendar />
              </div>
            </div>
        );
    };
}

export default App;