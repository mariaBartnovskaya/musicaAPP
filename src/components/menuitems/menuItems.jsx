import s from './menuItems.module.css'

function MenuItem() {
  return (
    <div className={`${s.nav__menu} menu`}>
      <ul className={s.menu__list}>
        <li className={s.menu__item}>
          <a href="http://" className={s.menu__link}>
            Главное
          </a>
        </li>
        <li className={s.menu__item}>
          <a href="http://" className={s.menu__link}>
            Мой плейлист
          </a>
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
