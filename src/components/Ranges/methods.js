import sumBy from 'lodash/sumBy';

export const calculate = (data, {index, value} = {}) => {
  // Необходима для массивов с одним элементом
  if (data.length < 2){
    return [{
      ...data[0],
      value: (typeof value !== 'undefined' ? value : data[0].value)
    }];
  }

  // Предыдущее значение
  const {value:oldValue} = data.find(n => n.index === index);

  // Разница
  const diff = oldValue - value;

  // Массив без изменяемого элемента
  const other = data
    .filter(n => n.index !== index)
    .sort((a,b) => a.value > b.value ? -1 : 1);

  // Направление
  const {value:sum} = other
    .reduce((a,b) => ({value: a.value + b.value}), {value})
  const direction = sum > 100 ? 'up' : 'down';

  // Получаем массив элементов,
  // которых необходимо изменить
  let Filter;
  if (direction === 'up') {
    Filter = n => n.value > other[0].value + diff
  } else {
    Filter = n => n.value < other[other.length - 1].value + diff;
  }
  const needChange = other
    .map(n => ({...n}))
    .filter(Filter);


  const values = data
    .map(n => index === n.index ?
      {index, value} :
      {
        index: n.index,
        value: getValue(n, diff, needChange)
      }
    );

  for (let i in data) {
    const value = values
      .find(n => n.index == i).value;
    data[i].value = +(value.toFixed(2));
  }


  // Прибавляем/отнимаем десятичный остаток
  const remainder = data
    .find(n => n.index !== index);
  remainder.value = +(remainder.value + (100 - sumBy(data, 'value'))).toFixed(2);


  return data;
}

const getValue = ({index, value}, diff, needChange) => {
  const item = needChange
    .find(n => n.index === index);

  if (item) {
    return ((sumBy(needChange, 'value') + diff) / needChange.length);
  }

  return value
}
