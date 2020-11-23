export const actions = {
  CHANGE_VALUE: 'CHANGE_VALUE',

  changeValue: (payload) => ({
    type: actions.CHANGE_VALUE,
    payload,
  })
}
