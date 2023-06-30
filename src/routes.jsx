/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Registration from './components/signin/registration'
import SignIn from './components/signin/signin'
import Favourites from './pages/favourites/favourites'

import Main from './pages/main/main'

import NotFound from './pages/not-found'
import DayPlaylist from './pages/selected playlists/playlist1'
import Playlist2 from './pages/selected playlists/playlist2'
import Playlist3 from './pages/selected playlists/playlist3'
import ProtectedRoute from './protected-routes'


function AppRoutes() {
  const user = useSelector((state) => state.user)
  return (
    <Routes>
      <Route path="/signin" element={<SignIn  />} />
      <Route path="/favourites" element={<Favourites />} />

      <Route path="/selection/playlist/1" element={<DayPlaylist />} />
      <Route path="/selection/playlist/2" element={<Playlist2 />} />
      <Route path="/selection/playlist/3" element={<Playlist3 />} />
      <Route path="/registration" element={<Registration />} />
      
      <Route element={<ProtectedRoute isAllowed={user.id} />}>


        <Route path="/" element={<Main />} />
        </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes
