/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css'
// eslint-disable-next-line import/no-extraneous-dependencies

import { useDispatch } from 'react-redux'
import s from './playlistcontent.module.css'
import icon from '../assets/img/icon/sprite.svg'
import { useSetLikeMutation, useSetUnlikeMutation } from '../../store/services/musicApi'
import { selectSong } from '../../store/slices/selectSong'






function Playlist(track) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
 
  const{id, track_file, name, author, duration_in_seconds, album} = track

  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()
  const [isFavourite, setFavourite] = useState('')
 const dispatch = useDispatch()
  
  const handleSetLike = () => {
    if (isFavourite) {
      setUnlike(track.id);
      setFavourite(false);
    } else {
      setLike(track.id);
      setFavourite(true);
    }
  }
  
  

  
  const handleSelectSong = (e) => {
     e.preventDefault();
    dispatch(
      selectSong({
        id,
        name,
        track_file,
        author,
        album,
        duration_in_seconds,
      })
    )}
  

  return (
    <SkeletonTheme
      color="#313131"
      backgroundColor="#313131"
      highlightColor="#313131"
    >
      <div className={`${s.content__playlist} playlist`}>
        
          <div className={s.playlist__item} key={id} id={id} >
            <div className={`${s.playlist__track} track`}>
              <div className={s.track__title}>
                <div className={s.track__title_image}>
                  <svg className={s.track__title_svg} alt="music">
                    <use xlinkHref={`${icon}#icon-note`} />
                  </svg>
                </div>
                <div className={s.track__title_text}>
                  {loading ? (
                    <Skeleton width={350} />
                  ) : (
                    <a className={s.track__title_link} href={track_file}  onClick={handleSelectSong}>
                      {name} <span className={s.track__title_span} />
                    </a>
                  )}
                </div>
              </div>
              <div className={s.track__author}>
                {loading ? (
                  <Skeleton width={270} />
                ) : (
                  <a className={s.track__author_link} href="http://">
                    {author}
                  </a>
                )}
              </div>
              <div className={s.track__album}>
                {loading ? (
                  <Skeleton width={270} />
                ) : (
                  <a className={s.track__album_link} href="http://">
                    {album}
                  </a>
                )}
              </div>
              {loading ? (
                <Skeleton width={1} />
              ) : (
                <div className={s.track__time}>
                  <svg className={s.track__time_svg} alt="time" onClick={handleSetLike}>
                    <use xlinkHref={`${icon}#icon-like`} fill={isFavourite ? 'red' : 'gray'} />
                  </svg>
                  <span className={s.track__time_text}>{duration_in_seconds}</span>
                </div>
              )}
            </div>
          </div>
      
      </div>
    </SkeletonTheme>
  )
}
export default Playlist
