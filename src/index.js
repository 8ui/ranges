import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Ranges';

// REDUX
import { Provider } from 'react-redux'
import { store } from './core/store'

// STYLES
import './assets/scss/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
