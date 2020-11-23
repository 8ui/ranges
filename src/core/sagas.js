import {
  takeLatest, all, select,
} from 'redux-saga/effects'
import { actions } from './actions'

function * changeValue({ payload }) {
  yield;
}

function * logger(action) {
  const store = yield select();
  console.log({ type: action.type, store });
}

const sagas = [
  takeLatest('*', logger),
  takeLatest(actions.CHANGE_VALUE, changeValue),
]

export default function* mainSaga() {
  yield all(sagas);
}
