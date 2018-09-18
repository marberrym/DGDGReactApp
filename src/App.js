import React, { Component } from 'react';
import './App.css';
import './HomePage'
import HomePage from './HomePage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dayGoal: "",
      weekGoal: "",
      monthGoal: "",
      yearGoal: "",
    }
  }
  render() {
    return (
      <HomePage/>
    );
  }
}

export default App;
