import Playlist from '../playlist/playlistcontent'
import s from './centercontent.module.css'
import {useGetAllTracksQuery} from '../../store/services/musicApi'

function CenterContent() {
  const {data = []} = useGetAllTracksQuery()
  const tracksData = data
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
      {tracksData.map((item) => (
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
