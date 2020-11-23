import {
  takeLatest, all, select, put,
} from 'redux-saga/effects'
import { actions } from './actions'
import { getValue, getActiveTab } from './selectors'
import { calculate } from './utils'


// После инициализации
// эмулируем нажатие на первый таб
function * init() {
  const tab = yield select(getActiveTab);
  yield put(actions.changeTab(tab))
}

// После изменения значения ползунка
// пересчитываем данные
function * changeValue({ payload: { index, value } }) {
  value = Number(value);

  if (value > 100) {
    value = 100;
  } else if (value < 0) {
    value = 0;
  }

  let data = yield select(getValue);
  data = calculate(data, { index, value });
  yield put(actions.updateData(data))
}

// После переключения таба
// получаем новые данные
function * changeTab({ payload }) {
  try {
    let data = yield fetch(`/json/${payload + 1}.json`)
    data = yield data.json();
    data = data.map((n, index) => ({
      index,
      label: n.Name.toUpperCase(),
      value: n.Percent,
    }))
    data = calculate(data, data[1])
    yield put(actions.updateData(data))
  } catch (e) {
    console.warn(e);
  }
}

// Логирование
function * logger(action) {
  const store = yield select();
  console.log(action, store);
}

const sagas = [
  takeLatest('*', logger),
  takeLatest(actions.INIT_APP, init),
  takeLatest(actions.CHANGE_TAB, changeTab),
  takeLatest(actions.CHANGE_VALUE, changeValue),
]

export default function* mainSaga() {
  yield all(sagas);
}
