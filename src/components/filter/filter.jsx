// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Options from '../filteroptions/filteroptions'

import Genre from '../genre/genre'
import Performer from '../performer/perfomer'
import Year from '../year/year'
import s from './filter.module.css'

function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibility = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }
  return (
    <div className={` ${s.centerblock__filter} filter`}>
      <div className={s.filter__title}>Искать по:</div>

      <div>
        <Performer
          isActive={visibleFilter === 'performer'}
          onClick={() => {
            toggleVisibility('performer')
          }}
        />
        {visibleFilter === 'performer' && <Options />}
      </div>
      <div>
        <Year
          isActive={visibleFilter === 'year'}
          onClick={() => {
            toggleVisibility('year')
          }}
        />
        {visibleFilter === 'year' && <Options />}
      </div>
      <div>
        <Genre
          isActive={visibleFilter === 'genre'}
          onClick={() => {
            toggleVisibility('genre')
          }}
        />
        {visibleFilter === 'genre' && <Options />}
      </div>
    </div>
  )
}
export default Filter
