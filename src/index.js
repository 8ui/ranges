import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Container } from './components/organisms';

// REDUX
import { actions, store } from './core'

// STYLES
import './assets/scss/index.scss';

store.dispatch(actions.init());

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
