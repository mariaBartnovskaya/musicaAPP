// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom'
import s from './menuItems.module.css'

function MenuItem() {
  return (
    <div className={`${s.nav__menu} menu`}>
      <ul className={s.menu__list}>
        <li className={s.menu__item}>
          <NavLink to="/" className={s.menu__link}>
            Главное
          </NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/myplaylist" className={s.menu__link}>
            Мой плейлист
          </NavLink>
        </li>
        <li className={s.menu__item}>
          <a href="http://" className={s.menu__link}>
            Войти
          </a>
        </li>
      </ul>
    </div>
  )
}
export default MenuItem
