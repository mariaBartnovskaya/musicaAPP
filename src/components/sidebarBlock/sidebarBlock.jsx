/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import playlist01 from '../assets/img/playlist01.png'
import playlist02 from '../assets/img/playlist02.png'
import playlist03 from '../assets/img/playlist03.png'

function SidebarBlock() {
  return (
    <div className=" sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist01}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist02}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist03}
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default SidebarBlock
