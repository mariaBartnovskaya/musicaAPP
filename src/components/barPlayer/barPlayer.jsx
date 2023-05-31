import { useState, useEffect } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton from 'react-loading-skeleton'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css'
import s from './barPlayer.module.css'

function Player() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className={s.bar}>
      <div className={s.content}>
        <div className={s.playerProgress} />
        <div className={s.bar__playerBlock}>
          <div className={s.bar__player}>
            <div className={s.player__controls}>
              <div className={s.player__btn_prev}>
                <svg className={s.player__btn_prev_svg} alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div className={s.player__btn_play}>
                <svg className={s.player__btn_play_svg} alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </svg>
              </div>
              <div className={s.player__btn_next}>
                <svg className={s.player__btn_next_svg} alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div className={s.player__btn_repeat}>
                <svg className={s.player__btn_repeat_svg} alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div className={s.player__btn_shuffle}>
                <svg className={s.player__btn_shuffle_svg} alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </svg>
              </div>
            </div>

            <div className={s.player__track_play}>
              <div className={s.trackPlay__contain}>
                <div className={s.trackPlay__image}>
                  {loading ? (
                    <Skeleton count={1} width={51} height={51} />
                  ) : (
                    <svg className={s.trackPlay__svg} alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  )}
                </div>
                <div className={s.trackPlay__author}>
                  {loading ? (
                    <Skeleton count={1} />
                  ) : (
                    <a className={s.trackPlay__author_link} href="http://">
                      Ты та...
                    </a>
                  )}
                </div>
                <div className={s.trackPlay__album}>
                  {loading ? (
                    <Skeleton count={1} />
                  ) : (
                    <a className={s.trackPlay__album_link} href="http://">
                      Баста
                    </a>
                  )}
                </div>
              </div>

              <div className={s.trackPlay__like_dis}>
                <div className={`${s.trackPlay__like} _btn_icon`}>
                  <svg className={s.trackPlay__like_svg} alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div className={s.trackPlay__dislike}>
                  <svg className={s.trackPlay__dislike_svg} alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={`${s.bar__volume_block} volume`}>
            <div className={s.volume__content}>
              <div className={s.volume__image}>
                <svg className={s.volume__svg} alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={`${s.volume__progress} _btn`}>
                <input
                  className={`${s.volume__progress_line} _btn`}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Player
