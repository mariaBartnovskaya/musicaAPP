/* eslint-disable import/no-extraneous-dependencies */

import Wrapper from '../../components/wrapper/wrapper'
import s from '../../App.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import SidebarBlock from '../../components/sidebarBlock/sidebarBlock'
import Personal from '../../components/personal/personal'
import Player from '../../components/barPlayer/barPlayer'
import { useGetAllTracksQuery } from '../../store/services/musicApi'
import Playlist from '../../components/playlist/playlistcontent'


function Favourites() {
  const { data =[]} = useGetAllTracksQuery()
  const userID = Number(localStorage.getItem('user_id'))

  const dataTracks = data.filter(track => track.stared_user.some((user) => user.id === userID))
const playlists = dataTracks.map((item) => (<Playlist key={item.id}
  name={item.name}
  author={item.author}
  album={item.album}
  time={item.duration_in_seconds}
  stared_user={item.stared_user}
  track_file={item.track_file}
  id={item.id} />))
  return (
    <Wrapper>
      <main className={s.main}>
        <Sidebar />
        
        <div className={s.main__centerblock}> 
        <h1>Мои треки</h1>
        <ul>{playlists}</ul>
          </div>
          
        <div className={s.main__sidebar}>
          <Personal />
          <SidebarBlock />
         
        </div> 
       
        
        <Player tracks={dataTracks} />
      </main>
    </Wrapper>
  )
}
export default Favourites
