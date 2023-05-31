// eslint-disable-next-line no-unused-vars
import React from 'react'
import search from '../assets/img/icon/sprite.svg'
import s from './searchbar.module.css'

function SearchBar() {
  return (
    <div className={`${s.main__centerblock} ${s.centerblock__search} search`}>
      <svg className={s.search__svg}>
        <use xlinkHref={`${search}#icon-search`} />
      </svg>
      <input
        className={s.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
export default SearchBar
