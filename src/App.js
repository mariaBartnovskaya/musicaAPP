import Player from './components/barPlayer/barPlayer'
import CenterContent from './components/centercontent/centercontent'
import CenterTitle from './components/centertitle/centerTitle'
import Filter from './components/filter/filter'
import Sidebar from './components/sidebar/sidebar'
import Personal from './components/personal/personal'
import SearchBar from './components/searchbar/searchbar'
import SidebarBlock from './components/sidebarBlock/sidebarBlock'
import s from './App.module.css'

function App() {
  return (
    <div className="App">
      <div className={s.wrapper}>
        <div className={s.container}>
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
        </div>
      </div>
    </div>
  )
}

export default App
