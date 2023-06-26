/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useRef } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton from 'react-loading-skeleton'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css'
import s from './barPlayer.module.css'
import icon from '../assets/img/icon/sprite.svg'
import song from '../../css/audio.mp3'
import PlayerProgress from './progressBar'

function Player() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)
  const [duration, setDuration] = useState(null)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const btnPlay = (
    <div
      className={s.player__btn_play}
      onClick={handleStart}
      aria-hidden="true"
    >
      <svg className={s.player__btn_play_svg} alt="play">
        <use xlinkHref={`${icon}#icon-play`} />
      </svg>
    </div>
  )
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds
  }

  const btnStop = (
    <div className={s.player__btn_play} onClick={handleStop} aria-hidden="true">
      <svg className={s.player__btn_play_svg} alt="stop">
        <use xlinkHref={`${icon}#icon-pause`} />
      </svg>
    </div>
  )
  const togglePlay = isPlaying ? btnStop : btnPlay
  return (
    <div className={s.bar}>
      <div className={s.content}>
        <PlayerProgress
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
        />
        <div className={s.bar__playerBlock}>
          <div className={s.bar__player}>
            <div className={s.player__controls}>
              <div className={s.player__btn_prev}>
                <audio
                  ref={audioRef}
                  src={song}
                  onLoadedMetadata={onLoadedMetadata}
                />
                <svg className={s.player__btn_prev_svg} alt="prev">
                  <use xlinkHref={`${icon}#icon-prev`} />
                </svg>
              </div>
              {togglePlay}
              <div className={s.player__btn_next}>
                <svg className={s.player__btn_next_svg} alt="next">
                  <use xlinkHref={`${icon}#icon-next`} />
                </svg>
              </div>
              <div className={s.player__btn_repeat}>
                <svg className={s.player__btn_repeat_svg} alt="repeat">
                  <use xlinkHref={`${icon}#icon-repeat`} />
                </svg>
              </div>
              <div className={s.player__btn_shuffle}>
                <svg className={s.player__btn_shuffle_svg} alt="shuffle">
                  <use xlinkHref={`${icon}#icon-shuffle`} />
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
                      <use xlinkHref={`${icon}#icon-note`} />
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
                    <use xlinkHref={`${icon}#icon-like`} />
                  </svg>
                </div>
                <div className={s.trackPlay__dislike}>
                  <svg className={s.trackPlay__dislike_svg} alt="dislike">
                    <use xlinkHref={`${icon}#icon-dislike`} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={`${s.bar__volume_block} volume`}>
            <div className={s.volume__content}>
              <div className={s.volume__image}>
                <svg className={s.volume__svg} alt="volume">
                  <use xlinkHref={`${icon}#icon-volume`} />
                </svg>
              </div>
              <div className={s.volume__progress}>
                <input
                  className={s.volume__progress_line}
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
