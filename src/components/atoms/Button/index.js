import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.scss'


const Button = (props) => {
  const {
    active, color, onClick, children
  } = props;

  const cl = classNames(
    'button',
    `button--${color}`,
    { 'button--active': active },
  )

  return (
    <button
      type="button"
      className={cl}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;
