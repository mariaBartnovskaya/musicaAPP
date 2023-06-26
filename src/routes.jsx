// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom'
import Registration from './components/signin/registration'
import SignIn from './components/signin/signin'
import Favourites from './pages/favourites/favourites'
import ProtectedRoute from './protected-routes'
import Main from './pages/main/main'

import NotFound from './pages/not-found'


function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn setUser={setUser} user={user} />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes
