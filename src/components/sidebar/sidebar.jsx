// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/img/logo.png'
import NavMenu from '../navmenu/navmenu'
import s from './sidebar.module.css'

function Sidebar() {
  return (
    <nav className={`${s.main__nav} nav`}>
      <div className={`${s.nav__logo} logo`}>
        <img className={s.logo__image} src={logo} alt="logo" />
      </div>
      <NavMenu />
    </nav>
  )
}
export default Sidebar
