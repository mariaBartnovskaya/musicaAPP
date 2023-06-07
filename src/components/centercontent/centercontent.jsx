import Playlist from '../playlist/playlistcontent'
import s from './centercontent.module.css'

function CenterContent() {
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
      <Playlist />
    </div>
  )
}
export default CenterContent
