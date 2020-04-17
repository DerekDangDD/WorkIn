import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Calendar from './Calendar';
import Youtube from './Youtube';

const App = () => (
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/about'>
            <About />
        </Route>
        <Route exact path='/contact'>
            <Contact />
        </Route>
        <Route exact path='/calendar'>
            <Calendar />
        </Route>
        <Route exact path='/video'>
            <Youtube />
        </Route>
    </Switch>
);

export default App;