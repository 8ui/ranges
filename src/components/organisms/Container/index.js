import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import sumBy from 'lodash/sumBy';
import { actions, getValue, getActiveTab } from '../../../core'

import { Item, Header } from '../../molecules';
import { calculate } from './methods';


class Ranges extends React.Component {
  renderRanges = () => {
    const { data } = this.props;

    return (
      <div className="items">
        {data
          .sort((a, b) => (a.index < b.index ? -1 : 1))
          .map(this.renderItem)}
      </div>
    )
  }

  renderItem = (props, i) => {
    return (
      <Item key={`item-${i}`} {...props} />
    );
  }

  renderResult = () => {
    const { data } = this.props;
    const total = sumBy(data, 'value').toFixed(2);
    return (
      <div className="results">
        <h3>Результат</h3>
        {data.map((n, i) => (
          <div key={`result-${i}`}>
            {n.label}
            :
            {n.value}
            %
          </div>
        ))}
        <strong>
          Итог
          {' '}
          {total}
          %
        </strong>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.renderRanges()}
        {this.renderResult()}
      </div>
    );
  }
}

Ranges.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  tab: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  data: getValue(state),
  tab: getActiveTab(state),
})

const mapDispatchToProps = {
  changeValue: actions.changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranges)
