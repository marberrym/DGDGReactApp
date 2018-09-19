import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
let render = ReactDOM.render

let app = <Router><App/></Router>

render(app, document.getElementById('root'));
registerServiceWorker();
