import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import reduxThunk from 'redux-thunk';
import clienRequset from '../client/request';
import serverRequset from '../server/request';
export * from './actionCreater';
export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(reduxThunk.withExtraArgument(serverRequset))
  );
};
export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(reduxThunk.withExtraArgument(clienRequset))
  );
};
