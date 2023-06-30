/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Options from '../filteroptions/filteroptions'

import Genre from '../genre/genre'
import Performer from '../performer/perfomer'
import Year from '../year/year'
import s from './filter.module.css'
import {useGetAllTracksQuery} from '../../store/services/musicApi'
import { removeFilterYears, removeFilterAuthor, removeFilterGenre } from '../../store/slices/setFilters';


function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibility = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  const dispatch = useDispatch()
  const {data} = useGetAllTracksQuery()

   const authorTrack = data.map(item => item.author)
    const author = Array.from(new Set(authorTrack));

    const genreTrack = data.map(item => item.genre,)
    const genre = Array.from(new Set(genreTrack));

    const years = ['Сначала новые','Сначала старые']   

    
  const filterAuthor = useSelector(state => state.setFilters.author);
  const filterGenre = useSelector(state => state.setFilters.genre);
  const filterYears = useSelector(state => state.setFilters.years)


  return (
    <div className={` ${s.centerblock__filter} filter`}>
      <div className={s.filter__title}>Искать по:</div>

      <div onClick={() => dispatch(removeFilterAuthor())} aria-hidden className={`${s.circle_count} ${filterAuthor.length === 0 ? s.hidden : ''}`}>
      {filterAuthor.length} 
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
      <div onClick={() => dispatch(removeFilterYears())} aria-hidden className={`${s.circle_count} ${filterYears.length === 0 ? s.hidden : ''}`}> 
      {filterYears.length === 0 ? '0' : '1'}
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
      <div onClick={() => dispatch(removeFilterGenre())} aria-hidden  className={`${s.circle_count} ${filterGenre.length === 0 ? s.hidden : ''}`}> 
        {filterGenre.length}
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
