// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import s from './personal.module.css'
import {  getUserName } from '../../store/slices/user'

function Personal() {
  const UserID = useSelector(getUserName)
  return (
    <div className={`${s.sidebar__personal} ${s.main__sidebar}`}>
      <p className={s.sidebar__personal_name}>{UserID}</p>
      <div className={s.sidebar__avatar} />
    </div>
  )
}
export default Personal
