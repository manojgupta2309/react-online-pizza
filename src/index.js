import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore , combineReducers} from 'redux'
import {Provider} from 'react-redux'

import {ItemsReducer,cartItemsReducer} from './reducers/item-reducer'

const appStore  = createStore(combineReducers({ItemsReducer,cartItemsReducer}))

ReactDOM.render(<Provider store={appStore}>
    <BrowserRouter>
    <App/></BrowserRouter>
    </Provider>,document.getElementById("root"));

