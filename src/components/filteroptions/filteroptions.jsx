import s from './filteroptions.module.css'

function Options() {
  return (
    <div className={s.filter__items}>
      <ul className={s.filter__options}>
        <li>
          <a className={s.dropdown_item} href="http">
            Michael Jackson
          </a>
        </li>
        <li>
          <a className={s.dropdown_item} href="http">
            Zhu
          </a>
        </li>
        <li>
          <a className={s.dropdown_item} href="http">
            Frank Sinatra
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Options
