import { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css'
// eslint-disable-next-line import/no-extraneous-dependencies

import s from './playlistcontent.module.css'
import icon from '../assets/img/icon/sprite.svg'
import {useGetAllTracksQuery, useSetLikeMutation, useSetUnlikeMutation} from '../../store/services/musicApi'





function Playlist() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  const {data = []} = useGetAllTracksQuery()
  const tracksData = data
  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()
  const [isFavourite, setFavourite] = useState('')
  
 

  const handleSetLike = () => {
    if (isFavourite) {
      setUnlike();
      setFavourite(false);
    } else {
      setLike();
      setFavourite(true);
    }
  }

  

  return (
    <SkeletonTheme
      color="#313131"
      backgroundColor="#313131"
      highlightColor="#313131"
    >
      <div className={`${s.content__playlist} playlist`}>
        {tracksData.map((item) => (
          <div className={s.playlist__item} key={item.id} id={item.id} >
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
                    <a className={s.track__title_link} href={item.track_file} >
                      {item.name} <span className={s.track__title_span} />
                    </a>
                  )}
                </div>
              </div>
              <div className={s.track__author}>
                {loading ? (
                  <Skeleton width={270} />
                ) : (
                  <a className={s.track__author_link} href="http://">
                    {item.author}
                  </a>
                )}
              </div>
              <div className={s.track__album}>
                {loading ? (
                  <Skeleton width={270} />
                ) : (
                  <a className={s.track__album_link} href="http://">
                    {item.album}
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
                  <span className={s.track__time_text}>{item.duration_in_seconds}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}
export default Playlist
