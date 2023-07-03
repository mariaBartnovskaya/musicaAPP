/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-const-assign */
import { useSelector } from 'react-redux'
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
  const filterAuthor = useSelector(state => state.setFilters.author);
  const filterGenre = useSelector(state => state.setFilters.genre);
  const filterYears = useSelector(state => state.setFilters.years);
  switch (filterYears) {
    case 'Сначала новые': tracksData = tracksData.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(adate).valueOf()) - (new Date(bdate).valueOf()));   
        break;
        case 'Сначала старые':tracksData = tracksData.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(bdate).valueOf()) - (new Date(adate).valueOf()))            
        break;
    default:
        break;
}

  if ( filterAuthor.length > 0) {

    tracksData = tracksData.filter(({ author }) => filterAuthor.includes(author))
} 
if (filterGenre.length > 0) {

    tracksData = tracksData.filter(({ genre }) => filterGenre.includes(genre))
}

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
