import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <HomePage/>
    );
  }
}

export default App;
