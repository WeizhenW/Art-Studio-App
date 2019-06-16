import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//redux
import { applyMiddleware, createStore, combineReducer } from 'redux';
import { Provider } from 'react-redux';

//logger
import { logger } from 'redux-logger';





ReactDOM.render(<App />, document.getElementById('root'));
