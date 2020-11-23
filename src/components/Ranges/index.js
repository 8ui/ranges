import React from 'react';
import { connect } from 'react-redux'
import sumBy from 'lodash/sumBy';
import classNames from 'classnames'
import { actions } from '../../core/actions'
import { Tabs, Colors } from './domain';


import Item from './Item';
import { calculate } from './methods';

const data = [
  require('../../assets/json/1.json'),
  require('../../assets/json/2.json'),
  require('../../assets/json/3.json'),
  require('../../assets/json/4.json'),
  require('../../assets/json/5.json'),
]


class Ranges extends React.Component {
  state = {
    data: [],
    selected: 0,
  }

  componentWillMount(){
    this.onTab();
  }

  onTab = async(num = 0) => {
    try {
      this.setState({selected: num});
      let data = await this.onLoad(num + 1)
      data = data.map((n,index) => ({
        index,
        label: n.Name.toUpperCase(),
        value: n.Percent,
      }))
      data = calculate(data, data[1])
      this.setState({ data })
    } catch (e) {
      console.warn(e);
    }
  }

  // Имитация получения данных с сервера
  onLoad = async(num) => {
    // let data = await fetch('/assets/json/1.json')
    // data = await data.json()
    // console.warn('data', data);
    return new Promise((resolve, reject) => {
      console.warn('data', data, num);
      const result = data[num - 1];
      if (result) {
        resolve(result);
      } else {
        reject('Not found');
      }
    })
  }

  onChange = (value, index) => {
    const { changeValue } = this.props;
    const { data } = this.state;

    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }

    const result = calculate(data, { value, index });
    this.setState({ data: result });
    changeValue(result)
  }

  renderTabs = () => {
    const { selected } = this.state;
    console.warn('Tabs');
    return (
      <div className="tabs">
        {Tabs.map((n,i) => (
          <button
            key={`tab-${i}`}
            color={Colors[i]}
            active={selected === i}
            onClick={() => this.onTab(i)}
          >
            {n}
          </button>
        ))}
      </div>
    )
  }

  renderRanges = () => {
    const { data } = this.state;

    return (
      <div className="items">
        {data
          .sort((a,b) => a.index < b.index ? -1 : 1)
          .map(this.renderItem)}
      </div>
    )
  }

  renderItem = (n,i) => {
    return (
      <Item
        key={`item-${i}`}
        onChange={this.onChange}
        color={Colors[this.state.selected]}
        {...n}
      />
    );
  }

  renderResult = () => {
    const { data } = this.state;
    const total = sumBy(data, 'value').toFixed(2);
    return (
      <div className="results">
        <h3>Результат</h3>
        {data.map((n, i) => (
          <div key={`result-${i}`}>{n.label}: {n.value}%</div>
        ))}
        <strong>Итог {total}%</strong>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderTabs()}
        {this.renderRanges()}
        {this.renderResult()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeValue: actions.changeValue,
}

export default connect(null, mapDispatchToProps)(Ranges)
