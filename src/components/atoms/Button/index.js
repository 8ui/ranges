import React from 'react'
import classNames from 'classnames'


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

export default Button;
