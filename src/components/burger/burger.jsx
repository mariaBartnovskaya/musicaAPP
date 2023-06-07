import s from './burger.module.css'

function Burger({ onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${s.nav__burger} burger`}
      aria-hidden="true"
    >
      <span className={s.burger__line} />
      <span className={s.burger__line} />
      <span className={s.burger__line} />
    </div>
  )
}
export default Burger
