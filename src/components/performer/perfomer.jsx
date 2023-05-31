import s from './performer.module.css'

function Performer({ onClick, isActive }) {
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
      исполнителю
    </div>
  )
}
export default Performer
