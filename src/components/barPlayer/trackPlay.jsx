/* eslint-disable jsx-a11y/media-has-caption */
import Skeleton from 'react-loading-skeleton'
import { useEffect, useState } from 'react'
import icon from '../assets/img/icon/sprite.svg'
import s from './barPlayer.module.css'

function TrackPlay({ 
    author,
    album,
    audioRef,
    updateProgress,
    })  {

        const [loading, setLoading] = useState(true)
      useEffect(() => {
      setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
        const mp3File = '/audio/song.mp3';
        return(

<div className={s.player__track_play}>
              <div className={s.trackPlay__contain}>
              <audio  ref={audioRef} src={mp3File} onTimeUpdate={updateProgress} />
                <div className={s.trackPlay__image}>
                  {loading ? (
                    <Skeleton count={1} width={51} height={51} />
                  ) : (
                    <svg className={s.trackPlay__svg} alt="music">
                      <use xlinkHref={`${icon}#icon-note`} />
                    </svg>
                  )}
                </div>
                <div className={s.trackPlay__author}>
                  {loading ? (
                    <Skeleton count={1} />
                  ) : (
                    <a className={s.trackPlay__author_link} href="http://">
                      {author}
                    </a>
                  )}
                </div>
                <div className={s.trackPlay__album}>
                  {loading ? (
                    <Skeleton count={1} />
                  ) : (
                    <a className={s.trackPlay__album_link} href="http://">
                      {album}
                    </a>
                  )}
                </div>
              </div>

              <div className={s.trackPlay__like_dis}>
                <div className={`${s.trackPlay__like} _btn_icon`}>
                  <svg className={s.trackPlay__like_svg} alt="like">
                    <use xlinkHref={`${icon}#icon-like`} />
                  </svg>
                </div>
                <div className={s.trackPlay__dislike}>
                  <svg className={s.trackPlay__dislike_svg} alt="dislike">
                    <use xlinkHref={`${icon}#icon-dislike`} />
                  </svg>
                </div>
              </div>
            </div>)}

            export default TrackPlay