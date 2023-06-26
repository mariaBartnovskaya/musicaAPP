// eslint-disable-next-line no-unused-vars

import { useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/theme'
import logo from '../assets/img/logo.png'
import logoBlack from '../assets/img/logoBlack.png'
import NavMenu from '../navmenu/navmenu'
import s from './sidebar.module.css'

function Sidebar() {
  const { theme } = useContext(ThemeContext)
  return (
    <nav className={`${s.main__nav} nav`}>
      <div className={`${s.nav__logo} logo`}>
        <img
          className={s.logo__image}
          src={theme === themes.dark ? logo : logoBlack}
          alt="logo"
        />
      </div>
      <NavMenu />
    </nav>
  )
}
export default Sidebar
