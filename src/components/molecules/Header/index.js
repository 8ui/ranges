import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions, getTabs } from 'core'

import { Button } from 'atoms'
import './style.scss'


const Header = (props) => {
  const {
    tabs, changeTab,
  } = props;

  return (
    <div className="header">
      {tabs.map((tab, i) => (
        <Button
          key={`tab-${i}`}
          color={tab.color}
          active={tab.active}
          onClick={() => changeTab(i)}
        >
          {tab.text}
        </Button>
      ))}
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
