function Year({ onClick, isActive }) {
  const toggleVisibility = () => {
    onClick()
  }
  return (
    <div
      onClick={toggleVisibility}
      aria-hidden="true"
      className={`filter__button button-author _btn-text ${
        isActive ? '_btn-text_active' : ''
      }`}
    >
      году выпуска
    </div>
  )
}
export default Year
