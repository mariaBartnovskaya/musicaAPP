import Player from '../../components/barPlayer/barPlayer'
import CenterContent from '../../components/centercontent/centercontent'
import CenterTitle from '../../components/centertitle/centerTitle'
import Filter from '../../components/filter/filter'

import Personal from '../../components/personal/personal'
import SearchBar from '../../components/searchbar/searchbar'
import SidebarBlock from '../../components/sidebarBlock/sidebarBlock'
import s from '../../App.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import Wrapper from '../../components/wrapper/wrapper'

function Main() {
  ;<Wrapper>
    <main className={s.main}>
      <Sidebar />
      <div className={`${s.main__centerblock} centerblock`}>
        <SearchBar />
        <CenterTitle />
        <Filter />
        <CenterContent />
      </div>

      <div className={s.main__sidebar}>
        <Personal />
        <SidebarBlock />
      </div>
    </main>
    <Player />
  </Wrapper>
}
export default Main
