import React, { Component } from 'react';
import './App.css';
import './HomePage'
import HomePage from './HomePage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: 'Jaydoe',
        firstname: 'Matt'
      },
      dayGoal: {
        goal: 'Develop React Skills',
        progress: {},
        status: 'Complete',
      },
      weekGoal: {
        goal: 'Finish My Portfolio',
        progress: {},
        status: 'In Progress',
      },
      monthGoal: {
        goal: 'Get a Job',
        progress: {},
        status: 'In Progress',
      },
      yearGoal: {
        goal: 'Buy a condo/house',
        progress: {},
        status: 'In Progress'
      },
      
    }
  }
  render() {
    return (
      <HomePage/>
    );
  }
}

export default App;
