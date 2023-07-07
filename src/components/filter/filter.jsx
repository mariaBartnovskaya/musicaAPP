/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import Options from '../filteroptions/filteroptions'

import Genre from '../genre/genre'
import Performer from '../performer/perfomer'
import Year from '../year/year'
import s from './filter.module.css'





function Filter({tracksData}) {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibility = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }


  

  const artistItemsSet = new Set(
    tracksData ? tracksData.map((track) => track.author) : []
  );
  const author = [...artistItemsSet];

  const genreItemsSet = new Set(
    tracksData ? tracksData.map((track) => track.genre) : []
  );
  const genre = [...genreItemsSet];

  const years = ['Newer', 'Older'];
  
  return (
    <div className={` ${s.centerblock__filter} filter`}>
      <div className={s.filter__title}>Искать по:</div>

      <div  >
      
        <Performer 
        category ='performer'
       
          isActive={visibleFilter === 'performer'}
          onClick={() => {
            toggleVisibility('performer')
          }}
        />
        {visibleFilter === 'performer' && <Options data={author}
                            category='performer'
                             />}
      </div>
      <div > 
      
        <Year
        category = 'year'
          isActive={visibleFilter === 'year'}
          onClick={() => {
            toggleVisibility('year')
          }}
        />
        {visibleFilter === 'year' && <Options data={years}
                            category='year'
                           />}
      </div>
      <div > 
       
        <Genre
        category='genre'
          isActive={visibleFilter === 'genre'}
          onClick={() => {
            toggleVisibility('genre')
          }}
        />
        {visibleFilter === 'genre' && <Options data={genre}
                            category='genre' />}
      </div>
    </div>
  )
}
export default Filter
