import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import initialState from './initialState';
import inject from './inject';



let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let app = <Provider store={store}>
    <Router>
        <App></App>
    </Router>
</Provider>


let render = ReactDOM.render

render(app, document.getElementById('root'));
registerServiceWorker();
