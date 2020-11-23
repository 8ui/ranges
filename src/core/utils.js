import sumBy from 'lodash/sumBy';


const getValue = ({ index, value }, diff, needChange) => {
  const item = needChange
    .find((n) => n.index === index);

  if (item) {
    return ((sumBy(needChange, 'value') + diff) / needChange.length);
  }

  return value
}

export const calculate = (data, { index, value } = {}) => {
  const result = data;

  // Необходима для массивов с одним элементом
  if (result.length < 2) {
    return [{
      ...result[0],
      value: (typeof value !== 'undefined' ? value : result[0].value)
    }];
  }

  // Предыдущее значение
  const { value: oldValue } = result.find((n) => n.index === index);

  // Разница
  const diff = oldValue - value;

  // Массив без изменяемого элемента
  const other = result
    .filter((n) => n.index !== index)
    .sort((a, b) => (a.value > b.value ? -1 : 1));

  // Направление
  const { value: sum } = other
    .reduce((a, b) => ({ value: a.value + b.value }), { value })
  const direction = sum > 100 ? 'up' : 'down';

  // Получаем массив элементов,
  // которых необходимо изменить
  let Filter;
  if (direction === 'up') {
    Filter = (n) => n.value > other[0].value + diff
  } else {
    Filter = (n) => n.value < other[other.length - 1].value + diff;
  }
  const needChange = other
    .map((n) => ({ ...n }))
    .filter(Filter);


  const values = result
    .map((n) => (index === n.index
      ? { index, value }
      : {
        index: n.index,
        value: getValue(n, diff, needChange)
      }));

  Object.keys(result).forEach((key) => {
    const val = values.find((n) => n.index === Number(key));
    result[key].value = Number(val.value.toFixed(2));
  })


  // Прибавляем/отнимаем десятичный остаток
  const remainder = result
    .find((n) => n.index !== index);
  remainder.value = Number((remainder.value + (100 - sumBy(result, 'value'))).toFixed(2));

  return result;
}
