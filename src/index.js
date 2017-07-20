import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './components/app';
import reducers from './reducers';
import promise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
