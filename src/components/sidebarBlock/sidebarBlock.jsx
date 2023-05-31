/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import playlist01 from '../assets/img/playlist01.png'
import playlist02 from '../assets/img/playlist02.png'
import playlist03 from '../assets/img/playlist03.png'
import s from './sidebarBlock.module.css'

function SidebarBlock() {
  return (
    <div className={s.main__sidebar}>
      <div className={s.sidebar__block}>
        <div className={s.sidebar__list}>
          <div className={s.sidebar__item}>
            <a className={s.sidebar__link} href="#">
              <img
                className={s.sidebar__img}
                src={playlist01}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={s.sidebar__item}>
            <a className={s.sidebar__link} href="#">
              <img
                className={s.sidebar__img}
                src={playlist02}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={s.sidebar__item}>
            <a className={s.sidebar__link} href="#">
              <img
                className={s.sidebar__img}
                src={playlist03}
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SidebarBlock
