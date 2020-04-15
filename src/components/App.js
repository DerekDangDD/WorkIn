import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

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
    </Switch>
);

export default App;