/* eslint-disable no-empty-pattern */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../assets/img/logoBlack.png'
import s from './signin.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  usePostTokenMutation,
  usePostLoginMutation,
  
} from '../../store/services/user';

import {  isLogin, setUser} from '../../store/slices/user'

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [postLogin, {}] = usePostLoginMutation();
  const [postToken, {}] = usePostTokenMutation();
  const isAllowed = useSelector(isLogin)
  useEffect(()=>{
    if (isAllowed) navigate('/')  
  },[isAllowed]
  )


  const handleLogin = async () => {
 
    try {
      await postToken({ email, password })
        .unwrap()
        .then((tokenData) => {
          localStorage.setItem('token', tokenData.refresh)
          postLogin({ email, password })
            .unwrap()
            .then((user) => {
              localStorage.setItem('user_id', user.id)
              dispatch(
                setUser({
                  email: user.email,
                  id: user.id,
                  token: tokenData.access,
                  isLogin: true,
                })
              )
            })
            .then(() => {
              navigate('/')
            })
        })
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`Ошибка ${error.status}: ${error.data.detail}`)
    }
  }
  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/registration');
  };

  
  return (
    <div className={s.wrapper}>
      <div className={s.container_enter}>
        <div className={s.modal__block}>
          <div className={s.modal__form_login}>
            <div className={s.modal__logo}>
              <img src={logo} alt="logo" />
            </div>
            <input
              className={`${s.modal__input} login`}
              type="text"
              name="login"
              id="email"
              placeholder="Логин"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={`${s.modal__input} password`}
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={s.modal__btn_enter}
              onClick={handleLogin}
              id="btnEnter"
            >
              Войти
            </button>
            <button
              className={s.modal__btn_signup}
              onClick={handleRegister}
              
            >
              Зарегистрироваться
            </button>
            </div>
        </div>
      </div>
    </div>

  )
}
export default SignIn
