import s from './wrapper.module.css'

function Wrapper({ children }) {
  return <div className={s.container}>{children}</div>
}
export default Wrapper
