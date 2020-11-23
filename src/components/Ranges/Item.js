import React from 'react';
import PropTypes from 'prop-types';


class Item extends React.Component {
  onChange = (e) => {
    const { onChange, index } = this.props;
    onChange(Number(e.target.value), index);
  }

  render(){
    const { label, value, color } = this.props;
    return (
      <div className={`item ${color}`}>
        <div>
          {label}
        </div>
        <div>
          <div className="label">{value}%</div>
          <input type="range" onChange={this.onChange} value={value} step={0.01} min={0} max={100} />
        </div>
        <input type="number" onChange={this.onChange} value={value} step={1} min={0} max={100} />
      </div>
    )
  }
}

Item.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Item;
