import { combineReducers } from 'redux'
import { actions } from './actions';

const initialState = {
  value: [],
  tab: 0,
  tabs: [
    'Один элемент', 'Два элемента', 'Три элемента', 'Четыре элемента', 'Пять элементов'
  ],
  colors: [
    'red', 'orange', 'yellow', 'purple', 'green'
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_DATA:
      return { ...state, value: [...action.payload] };
    case actions.CHANGE_TAB:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
}

const appReducer = combineReducers({
  reducer
});

export default appReducer;
