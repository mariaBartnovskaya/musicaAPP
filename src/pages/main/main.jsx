/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-const-assign */

import Player from '../../components/barPlayer/barPlayer'
import CenterContent from '../../components/centercontent/centercontent'
import CenterTitle from '../../components/centertitle/centerTitle'
import Filter from '../../components/filter/filter'

import Personal from '../../components/personal/personal'
import SearchBar from '../../components/searchbar/searchbar'
import SidebarBlock from '../../components/sidebarBlock/sidebarBlock'
import s from '../../App.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import { useGetAllTracksQuery } from '../../store/services/musicApi'


function Main() {
  const {data = []} = useGetAllTracksQuery()
  const tracksData = data
  

  return (
    <main className={s.main}>
      <Sidebar />
      <div className={`${s.main__centerblock} centerblock`}>
        <SearchBar />
        <CenterTitle />
        <Filter tracksData={tracksData} />
        <CenterContent tracksData={tracksData}  />
      </div>

      <div className={s.main__sidebar}>
        <Personal />
        <SidebarBlock />
      </div>
      <Player />
    </main>
  )
}
export default Main
