import React, { Fragment } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import { Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import NotFound from './pages/404';
const Test = ({ route }) => {
  return <h1>tst</h1>;
};
const Go = () => {
  return <h1>00000</h1>;
};
const routes = [
  {
    component: Home,
    loadData: Home.loadData,
    path: '/',
    exact: true,
    routes: [
      {
        path: '/',
        component: Go,
      },
      {
        component: Test,
        path: '/ttt',
      },
    ],
  },
  {
    component: Login,
    path: '/login',
    exact: true,
  },
  {
    component: NotFound,
  },
];
export default routes;
