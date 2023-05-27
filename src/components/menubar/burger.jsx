function Burger({ onClick }) {
  return (
    <div onClick={onClick} className="nav__burger burger" aria-hidden="true">
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  )
}
export default Burger
