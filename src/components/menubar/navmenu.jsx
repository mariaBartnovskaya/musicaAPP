import { useState } from 'react'
import Burger from './burger'
import MenuItem from './menuItems'

function NavMenu() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  return (
    <div className="nav__menu menu">
      <Burger onClick={toggleVisibility} />
      {visible && <MenuItem />}
    </div>
  )
}

export default NavMenu
