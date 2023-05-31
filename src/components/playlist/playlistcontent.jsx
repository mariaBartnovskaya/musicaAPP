import { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css'

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
      <div className="content__playlist playlist">
        {playlistItems.map((item) => (
          <div className="playlist__item" key={item.id}>
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <Skeleton width={350} />
                  ) : (
                    <a className="track__title-link" href="http://">
                      {item.title} <span className="track__title-span" />
                    </a>
                  )}
                </div>
                <div className="track__author">
                  {loading ? (
                    <Skeleton width={270} />
                  ) : (
                    <a className="track__author-link" href="http://">
                      {item.author}
                    </a>
                  )}
                </div>
                <div className="track__album">
                  {loading ? (
                    <Skeleton width={270} />
                  ) : (
                    <a className="track__album-link" href="http://">
                      {item.album}
                    </a>
                  )}
                </div>
                {loading ? (
                  <Skeleton width={1} />
                ) : (
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className="track__time-text">{item.time}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}
export default Playlist
