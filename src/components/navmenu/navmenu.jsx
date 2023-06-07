import { useState } from 'react'
import Burger from '../burger/burger'
import MenuItem from '../menuitems/menuItems'
import s from './navmenu.module.css'

function NavMenu() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  return (
    <div className={`${s.nav__menu} menu`}>
      <Burger onClick={toggleVisibility} />
      {visible && <MenuItem />}
    </div>
  )
}

export default NavMenu
