/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-const-assign */

import { useSelector } from 'react-redux';
import Playlist from '../playlist/playlistcontent'
import s from './centercontent.module.css'


function CenterContent({tracksData}) {
 
const filteredTracks = tracksData ?? []
  
const filterAuthor = useSelector(state => state.setFilters.author);
  const filterGenre = useSelector(state => state.setFilters.genre);
  const filterYears = useSelector(state => state.setFilters.years);
  switch (filterYears) {
    case 'Сначала новые': filteredTracks = tracksData.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(adate).valueOf()) - (new Date(bdate).valueOf()));   
        break;
        case 'Сначала старые':filteredTracks = tracksData.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(bdate).valueOf()) - (new Date(adate).valueOf()))            
        break;
    default:
        break;
}

  if ( filterAuthor.length > 0) {

    filteredTracks = tracksData.filter(({ author }) => filterAuthor.includes(author))
} 
if (filterGenre.length > 0) {

  filteredTracks = tracksData.filter(({ genre }) => filterGenre.includes(genre))
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
