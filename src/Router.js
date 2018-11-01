import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import MyGoals from './Pages/MyGoals';
import SignUpContainer from './Pages/SignUpContainer';
import Completed from './Pages/Completed';
import InProgress from './Pages/InProgress';
import LoginContainer from './Pages/LoginContainer';
import NewGoal from './Pages/NewGoal';
import inject from './inject';
import { connect } from 'react-redux'

class Router extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" component={SignUpContainer} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/newgoal" component={NewGoal} />
                <Route exact path="/about" component={About} />
                <Route exact path="/goals" component={MyGoals} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/inprogress" component={InProgress} />
            </Switch>
        </HashRouter>
    }
}
    


let RouterSmart = connect()(inject('/validate', {headers: {token: localStorage.token}})(Router))

export default RouterSmart

