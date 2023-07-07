/* eslint-disable object-shorthand */
/* eslint-disable no-console */
import {  useState } from 'react'

import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logoBlack.png'
import Wrapper from '../wrapper/wrapper'
import s from './signin.module.css'
import { usePostRegMutation } from '../../store/services/user'

function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passRep, setPassRep] = useState('')
  const navigate = useNavigate()
  const [postReg] = usePostRegMutation()
  

  const RegistrationButton = async () => {
    
    if(password !== passRep){
             console.error('password does not match') ;
      return
    }
 try{
      await postReg({
    email : email,
    password: password,
    username: email,
    }).unwrap()
    .then(() => {
      navigate('/signin')
    })
    }catch (error) {
      // eslint-disable-next-line no-alert
      alert(`Ошибка ${error.status}: ${error.data.detail}`)
    }}
    
  return (
    <Wrapper>
      <div className={s.container_enter}>
        <div className={s.modal__block}>
          <div className={s.modal__form_login} >
            <div className={s.modal__logo}>
              <img src={logo} alt="logo" />
            </div>
            <input
              className={`${s.modal__input} login`}
              type="text"
              
              id="email"
              placeholder="Логин"
              
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={`${s.modal__input} password`}
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={`${s.modal__input} password`}
              type="password"
              name="password"
              id="reppassword"
              placeholder="Повторите пароль"
            
              onChange={(e) => setPassRep(e.target.value)}
            />
            <button
              className={s.modal__btn_enter}
              type="submit"
              onClick={RegistrationButton}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Registration
