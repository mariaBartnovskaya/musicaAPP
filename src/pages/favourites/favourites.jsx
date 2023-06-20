import Wrapper from '../../components/wrapper/wrapper'
import s from '../../App.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import SidebarBlock from '../../components/sidebarBlock/sidebarBlock'
import Personal from '../../components/personal/personal'
import Player from '../../components/barPlayer/barPlayer'

function Favourites() {
  return (
    <Wrapper>
      <main className={s.main}>
        <Sidebar />

        <div className={s.main__sidebar}>
          <Personal />
          <SidebarBlock />
        </div>
        <Player />
      </main>
    </Wrapper>
  )
}
export default Favourites
