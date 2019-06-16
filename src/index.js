import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//logger
import { logger } from 'redux-logger';

//define reducers
const paintingListReducer = (state=[], action) => {
    if(action.type === 'SET_PAINTING_LIST') {
        return action.payload;
    }
    return state;
}

const cartReducer = (state=[], action) => {
    if(action.type === 'ADD_TO_CART') {
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        paintingListReducer,
        cartReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
