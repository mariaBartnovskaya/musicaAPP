// eslint-disable-next-line no-unused-vars
import React from 'react'
import s from './personal.module.css'

function Personal() {
  return (
    <div className={`${s.sidebar__personal} ${s.main__sidebar}`}>
      <p className={s.sidebar__personal_name}>Sergey.Ivanov</p>
      <div className={s.sidebar__avatar} />
    </div>
  )
}
export default Personal
