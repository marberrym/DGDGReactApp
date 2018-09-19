import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Goals from './Pages/Goals';
import SignUp from './Pages/SignUp';
import Completed from './Pages/Completed';
import InProgress from './Pages/InProgress';

let Router = () =>
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/completed" component={Completed} />
            <Route exact path="/inprogress" component={InProgress} />
        </Switch>
    </HashRouter>

export default Router;