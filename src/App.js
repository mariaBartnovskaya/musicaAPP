import Player from './components/barPlayer/barPlayer'
import CenterContent from './components/centerblock/centercontent'
import CenterTitle from './components/centerblock/centerTitle'
import Filter from './components/filter/filter'
import Sidebar from './components/menubar/sidebar'
import Personal from './components/personal/personal'
import SearchBar from './components/searchbar/searchbar'
import SidebarBlock from './components/sidebarBlock/sidebarBlock'
import './css/style.css'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Sidebar />
            <div className="main__centerblock centerblock">
              <SearchBar />
              <CenterTitle />
              <Filter />
              <CenterContent />
            </div>

            <div className="main__sidebar">
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
