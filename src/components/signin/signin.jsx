/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import {  useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../assets/img/logoBlack.png'
import s from './signin.module.css'
import { useDispatch } from 'react-redux'
import {
  usePostTokenMutation,
  usePostLoginMutation,
  
} from '../../store/services/user';

import {  setUser } from '../../store/slices/user'

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [postLogin] = usePostLoginMutation();
  const [postToken] = usePostTokenMutation();


  
  
  
  

  const handleLogin = async () => {
    await postToken({ email, password })
      .unwrap()
      .then((token) => {
       
        localStorage.setItem('token', token.refresh)

        postLogin({ email, password }).then((user) => {
          localStorage.setItem('user_id', user.data.id)
          
          dispatch(
            setUser({
              email: user.data.email,
              id: user.data.id,
              token: token.access,
            })
          )
          
          navigate('/')
        
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          // Выводим ошибку на экране
          // eslint-disable-next-line no-alert
          alert(`Ошибка при получении токена. Попробуйте еще раз.`);
      });
      })

    
  }
  const handleRegistrationButtonClick = () => {
    
    navigate('/registration', { replace: true })
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
              onClick={handleRegistrationButtonClick}
              id="btnSignUp"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignIn
