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
  const { data = []} = useGetAllTracksQuery()
  const userID = Number(localStorage.getItem('user_id'))
  
  
  const starredList = data.filter((track) =>
  track.stared_user.find((user) => user.id === userID)
)
  const playlists = starredList.map((track) => <Playlist key={track.id} track={track} />)
  return (
    <Wrapper>
      <main className={s.main}>
        <Sidebar />

        <div className={s.main__sidebar}>
          <Personal />
          <SidebarBlock />
        </div>
        <ul>{playlists}</ul>
        <Player data={data} />
      </main>
    </Wrapper>
  )
}
export default Favourites
