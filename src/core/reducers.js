import { combineReducers } from 'redux'
import { actions } from './actions';

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

const appReducer = combineReducers({
  reducer
});

export default appReducer;
