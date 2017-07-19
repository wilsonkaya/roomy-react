import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/app';
import RentIndex from './components/rent_index';
import reducers from './reducers';
import promise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={RentIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
