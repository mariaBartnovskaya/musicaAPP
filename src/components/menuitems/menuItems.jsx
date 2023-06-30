// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../themeSwitcher/themeSwitcher'
import s from './menuItems.module.css'

function MenuItem() {
  return (
    <>
      <div className={`${s.nav__menu} menu`}>
        <ul className={s.menu__list}>
          <li className={s.menu__item}>
            <NavLink to="/" className={s.menu__link}>
              Главное
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/favourites" className={s.menu__link}>
              Мой плейлист
            </NavLink>
          </li>
          <li className={s.menu__item}>
          <NavLink to="/signin" className={s.menu__link}>
              Войти
              </NavLink>
          </li>
        </ul>
      </div>
      <ThemeSwitcher />
    </>
  )
}
export default MenuItem
