import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { getClientStore } from '../store';
import { Provider } from 'react-redux';
const store = getClientStore();
const app = (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>
);
ReactDOM.hydrate(app, document.getElementById('root'));
