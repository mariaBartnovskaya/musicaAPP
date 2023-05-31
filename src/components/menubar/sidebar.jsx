// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/img/logo.png'
import NavMenu from './navmenu'

function Sidebar() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <NavMenu />
    </nav>
  )
}
export default Sidebar
