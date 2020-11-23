import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions, getValue, getTotal } from 'core'

import { Item, Header } from 'molecules';


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
    const { data, total } = this.props;
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
          {total.toFixed(2)}
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
  changeValue: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  data: getValue(state),
  total: getTotal(state),
})

const mapDispatchToProps = {
  changeValue: actions.changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranges)
