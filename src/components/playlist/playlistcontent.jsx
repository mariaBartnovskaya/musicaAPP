import { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css'
import s from './playlistcontent.module.css'
import icon from '../assets/img/icon/sprite.svg'

const playlistItems = [
  {
    id: '1',
    title: 'Guilt',
    author: 'Nero',
    album: 'Welcome Reality',
    time: '4:44',
    skeletonWidth: 350,
  },
  {
    id: '2',
    title: 'Elektro',
    author: 'Dynoro, Outwork, Mr. Gee',
    album: 'Elektro',
    time: '2:22',
    skeletonWidth: 350,
  },
  {
    id: '3',
    title: 'I’m Fire',
    author: 'Ali Bakgor',
    album: 'I’m Fire',
    time: '2:22',
    skeletonWidth: 350,
  },
  {
    id: '4',
    title: 'Non Stop',
    subtitle: '(Remix)',
    author: 'Стоункат, Psychopath',
    album: 'Non Stop',
    time: '4:12',
    skeletonWidth: 350,
  },
  {
    id: '5',
    title: 'Run Run',
    subtitle: '(feat. AR/CO)',
    author: 'Jaded, Will Clarke, AR/CO',
    album: 'Run Run',
    time: '2:54',
    skeletonWidth: 350,
  },
  {
    id: '6',
    title: 'Eyes on Fire',
    subtitle: '(Zeds Dead Remix)',
    author: 'Blue Foundation, Zeds Dead',
    album: 'Eyes on Fire',
    time: '5:20',
    skeletonWidth: 350,
  },
  {
    id: '7',
    title: 'Mucho Bien',
    subtitle: '(Hi Profile Remix)',
    author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
    album: 'Mucho Bien',
    time: '3:41',
    skeletonWidth: 350,
  },
  {
    id: '8',
    title: 'Knives n Cherries',
    author: 'minthaze',
    album: 'Captivating',
    time: '1:48',
    skeletonWidth: 350,
  },
  {
    id: '9',
    title: 'How Deep Is Your Love',
    author: 'Calvin Harris, Disciples',
    album: 'How Deep Is Your Love',
    time: '3:32',
    skeletonWidth: 350,
  },
  {
    id: '10',
    title: 'Morena',
    author: 'Tom Boxer',
    album: 'Soundz Made in Romania',
    time: '3:36',
    skeletonWidth: 350,
  },
]

function Playlist() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <SkeletonTheme
      color="#313131"
      backgroundColor="#313131"
      highlightColor="#313131"
    >
      <div className={`${s.content__playlist} playlist`}>
        {playlistItems.map((item) => (
          <div className={s.playlist__item} key={item.id}>
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
                    <a className={s.track__title_link} href="http://">
                      {item.title} <span className={s.track__title_span} />
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
                  <svg className={s.track__time_svg} alt="time">
                    <use xlinkHref={`${icon}#icon-like`} />
                  </svg>
                  <span className={s.track__time_text}>{item.time}</span>
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
