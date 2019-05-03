import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';

const initialState = {};

export const store = configureStore(initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
