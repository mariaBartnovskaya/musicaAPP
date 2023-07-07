/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-const-assign */

import { useSelector } from 'react-redux';
import Playlist from '../playlist/playlistcontent'
import s from './centercontent.module.css'


function CenterContent({tracksData}) {
 
let filteredTracks = tracksData ?? []
  
  const filteredGenre = useSelector((state) => state.filteredTracks.genre);
  const filteredAuthor = useSelector((state) => state.filteredTracks.author);
  const filteredYears = useSelector((state) => state.filteredTracks.years);
  

  if (filteredAuthor.length > 0) {
    filteredTracks = filteredTracks.filter((track) =>
      filteredAuthor.includes(track.author)
    );
  }
if (filteredGenre.length > 0) {
  filteredTracks = filteredTracks.filter((track) =>
    filteredGenre.includes(track.genre)
  );
  switch (filteredYears[0]) {
    case 'newer':
      filteredTracks = filteredTracks.filter((el) => el).sort(({ release_date: adate }, { release_date: bdate }) => new Date(bdate).valueOf() - new Date(adate).valueOf())
      break
    case 'older':
      filteredTracks = filteredTracks.filter((el) => el).sort(({ release_date: adate }, { release_date: bdate }) => new Date(adate).valueOf() - new Date(bdate).valueOf())
      break
    default:
      break
  }

}
  return (
    <div className={s.centerblock__content}>
      <div className={`${s.content__title} playlist_title`}>
        <div className={`${s.playlistTitle__col} ${s.col01}`}>Трек</div>
        <div className={`${s.playlistTitle__col} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
        <div className={`${s.playlistTitle__col} ${s.col03}`}>АЛЬБОМ</div>
        <div className={`${s.playlistTitle__col} ${s.col04}`}>
          <svg className={s.playlistTitle__svg} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      {filteredTracks.map((item) => (
      <Playlist key={item.id}
                    name={item.name}
                    author={item.author}
                    album={item.album}
                    time={item.duration_in_seconds}
                    stared_user={item.stared_user}
                    track_file={item.track_file}
                    id={item.id} />))}
    </div>
  )
}
export default CenterContent
