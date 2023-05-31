import s from './year.module.css'

function Year({ onClick, isActive }) {
  const toggleVisibility = () => {
    onClick()
  }
  return (
    <div
      onClick={toggleVisibility}
      aria-hidden="true"
      className={`${s.filter__button} ${s.button_author} ${s.btn_text} ${
        isActive ? '_btn-text_active' : ''
      }`}
    >
      году выпуска
    </div>
  )
}
export default Year
