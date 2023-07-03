/* eslint-disable import/no-extraneous-dependencies */

import Wrapper from '../../components/wrapper/wrapper'
import s from '../../App.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import SidebarBlock from '../../components/sidebarBlock/sidebarBlock'
import Personal from '../../components/personal/personal'
import Player from '../../components/barPlayer/barPlayer'
import { useGetAllTracksQuery } from '../../store/services/musicApi'


function Favourites() {
  const { data =[]} = useGetAllTracksQuery()
  const userID = Number(localStorage.getItem('user_id'))

  const dataTracks = data.filter((track) => track.stared_user.some((user) => user.id === userID))

  return (
    <Wrapper>
      <main className={s.main}>
        <Sidebar />

        <div className={s.main__sidebar}>
          <Personal />
          <SidebarBlock />
        </div> 
        <div> <h1>Мои треки</h1>
          {dataTracks}</div>
        
        <Player tracks={dataTracks} />
      </main>
    </Wrapper>
  )
}
export default Favourites
