import { createStore, applyMiddleware, compose } from 'redux';

// SAGAS
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas'

import rootReducer from './reducers';


const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(
  applyMiddleware(sagaMiddleware)
);

export const store = createStore(
  rootReducer,
  undefined,
  compose(...middlewares),
);

// then run the saga
sagaMiddleware.run(sagas);
