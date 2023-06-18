import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo_modal.png'
import Wrapper from '../wrapper/wrapper'
import s from './signin.module.css'

function Registration() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const navigate = useNavigate()

  const handleRegistrationButtonClick = (event) => {
    event.preventDefault()
    navigate('/login', { replace: true })
  }
  return (
    <Wrapper>
      <div className={s.container_enter}>
        <div className={s.modal__block}>
          <form className={s.modal__form_login} id="formLogIn" action="#">
            <div className={s.modal__logo}>
              <img src={logo} alt="logo" />
            </div>
            <input
              className={`${s.modal__input} login`}
              type="text"
              name="login"
              id="username"
              placeholder="Логин"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              className={`${s.modal__input} password`}
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              className={`${s.modal__input} password`}
              type="password"
              name="password"
              id="password"
              placeholder="Повторите пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className={s.modal__btn_enter}
              type="submit"
              onClick={handleRegistrationButtonClick}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
export default Registration
