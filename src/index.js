import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import rootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import './index.css';
import {Router, browserHistory} from 'react-router'
import Routes from './routes'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
