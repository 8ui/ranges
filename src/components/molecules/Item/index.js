import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import classNames from 'classnames';
import { actions, getActiveColor } from 'core'

import './style.scss'


class Item extends React.Component {
  onChange = ({ target }) => {
    let value = Number(target.value);
    const { changeValue, index } = this.props;

    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }

    changeValue({ value, index });
  }

  render() {
    const { label, value, color } = this.props;

    return (
      <div className={classNames('item', `item--${color}`)}>
        <div>
          {label}
        </div>
        <div>
          <div className="item-label">
            {value}
            %
          </div>
          <input type="range" onChange={this.onChange} value={value} step={0.01} min={0} max={100} />
        </div>
        <input type="number" onChange={this.onChange} value={value} step={1} min={0} max={100} />
      </div>
    )
  }
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  color: getActiveColor(state),
})

const mapDispatchToProps = {
  changeValue: actions.changeValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
