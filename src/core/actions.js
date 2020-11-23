export const actions = {
  INIT_APP: 'INIT_APP',
  UPDATE_DATA: 'UPDATE_DATA',
  CHANGE_VALUE: 'CHANGE_VALUE',
  CHANGE_TAB: 'CHANGE_TAB',

  init: () => ({
    type: actions.INIT_APP,
  }),
  updateData: (payload) => ({
    type: actions.UPDATE_DATA,
    payload,
  }),
  changeValue: (payload) => ({
    type: actions.CHANGE_VALUE,
    payload,
  }),
  changeTab: (payload) => ({
    type: actions.CHANGE_TAB,
    payload,
  }),
}
