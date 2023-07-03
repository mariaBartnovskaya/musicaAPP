/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux'
import Wrapper from '../../components/wrapper/wrapper'
import s from '../../App.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import SidebarBlock from '../../components/sidebarBlock/sidebarBlock'
import Personal from '../../components/personal/personal'
import Player from '../../components/barPlayer/barPlayer'
import { useGetAllTracksQuery } from '../../store/services/musicApi'
import { getUserID } from '../../store/slices/user'

function Favourites() {
  const { data =[]} = useGetAllTracksQuery()
  const userID = useSelector(getUserID)

  const dataTracks = data.filter((track) => track.stared_user.some((user) => user.id === userID))

  return (
    <Wrapper>
      <main className={s.main}>
        <Sidebar />

        <div className={s.main__sidebar}>
          <Personal />
          <SidebarBlock />
        </div>
        <ul>{dataTracks}</ul>
        <Player tracks={dataTracks} />
      </main>
    </Wrapper>
  )
}
export default Favourites
