import sumBy from 'lodash/sumBy';


export const getReducer = (state) => state.reducer;

// Данные ползунков
export const getValue = (state) => getReducer(state).value;

// Цвета
export const getColors = (state) => getReducer(state).colors;

// Активный таб
export const getActiveTab = (state) => getReducer(state).tab;

// Активный цвет
export const getActiveColor = (state) => getColors(state)[getActiveTab(state)];

// Собираем табы с цветом и меткой "активный"
export const getTabs = (state) => {
  const { tabs } = getReducer(state);
  const active = getActiveTab(state);
  const colors = getColors(state);
  const result = [];
  tabs.forEach((tab, key) => {
    result[key] = { text: tab }
    result[key].active = active === key;
    result[key].color = colors[key];
  })
  return result;
}

// Сумма всех значений
export const getTotal = (state) => {
  const value = getValue(state);
  const total = sumBy(value, 'value');
  return total;
}
