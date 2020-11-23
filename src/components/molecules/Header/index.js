import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { actions, getTabs } from '../../../core'


const Header = (props) => {
  const {
    tabs, changeTab,
  } = props;

  return (
    <div className="header">
      {tabs.map((tab, i) => {
        const cl = classNames(
          'button',
          `button--${tab.color}`,
          { 'button--active': tab.active },
        )
        return (
          <button
            type="button"
            key={`tab-${i}`}
            className={cl}
            onClick={() => changeTab(i)}
          >
            {tab.text}
          </button>
        )
      })}
    </div>
  )
}

Header.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  changeTab: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  tabs: getTabs(state),
})

const mapDispatchToProps = {
  changeTab: actions.changeTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
