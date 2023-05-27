// eslint-disable-next-line no-unused-vars
import React from 'react'
import search from '../assets/img/icon/sprite.svg'

function SearchBar() {
  return (
    <div className="main__centerblock centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref={`${search}#icon-search`} />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
export default SearchBar
