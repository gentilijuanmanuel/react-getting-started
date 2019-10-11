import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import personReducer from '../src/store/personReducer';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(personReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
