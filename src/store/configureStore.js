import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducers';

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
};

export default function configureStore(initialState, history) {
  const composedStoreEnhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    reduxDevTool()
  );

  const store = composedStoreEnhancer(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers'));
    });
  }

  return store;
}
