import Playlist from "../../components/playlist/playlistcontent"
import { useGetAllTracksQuery } from "../../store/services/musicApi"
import s from '../../components/centercontent/centercontent.module.css'
import st from '../../components/centertitle/centerTitle.module.css'
import Sidebar from "../../components/sidebar/sidebar"
import style from '../../App.module.css'

function DayPlaylist() {
    const {data = []} = useGetAllTracksQuery()
  const tracksData = data
    return(
        <main className={style.main}>
        <Sidebar />
        <div className={s.centerblock__content}>
            
           <h1 className={`${st.main__centerblock} ${st.centerblock__h2}`}>плейлист дня</h1>
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
                          </main>
    )
}
export default DayPlaylist