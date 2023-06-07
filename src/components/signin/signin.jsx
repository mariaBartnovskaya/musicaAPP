/* eslint-disable react/button-has-type */
import { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../assets/img/logo.png'
import s from './signin.module.css'

function SignIn({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleLogin = (event) => {
    event.preventDefault()
    setUser({ login: username })
    navigate('/')
  }
  return (
    <div className={s.wrapper}>
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
            <button
              className={s.modal__btn_enter}
              onClick={handleLogin}
              id="btnEnter"
            >
              Войти
            </button>
            <button className={s.modal__btn_signup} id="btnSignUp">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignIn
