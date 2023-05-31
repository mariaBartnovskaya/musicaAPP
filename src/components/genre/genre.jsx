import s from './genre.module.css'

function Genre({ onClick, isActive }) {
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
      жанру
    </div>
  )
}
export default Genre
