import React from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import './style.css';

class App extends React.Component {

    state = {
        apiResponse: ""
    }
    
    callAPI = async() => {

        const res = await axios({
            url: 'https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyDXNsmrAD6P3W5Xq0C5UmOUl_B_KQKdDVg',
            method: 'post',
            params: {
                key: 'AIzaSyDXNsmrAD6P3W5Xq0C5UmOUl_B_KQKdDVg'
            },
            data: {
                    "timeMin": "2020-04-18T00:00:00-0800",
                    "timeMax": "2020-04-18T21:00:00-0800",
                    "timeZone": "America/Vancouver",
                    "items": [
                      {
                        "id": "bobtestpizza001@gmail.com"
                      },
                      {
                        "id": "johnny@ualberta.ca"
                      }
                    ]
                  }
        });
        this.setState({ apiResponse: res.data });
        console.log(JSON.stringify(res.data));
    }

    componentDidMount() {
        this.callAPI();
    }
    
    render() { 
        return (
            <div>
                <Navigation />
                <div className="app">
                    {JSON.stringify(this.state.apiResponse)}
              </div>
            </div>
        );
    };
}

export default App;