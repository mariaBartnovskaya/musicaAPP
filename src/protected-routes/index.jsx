/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import { isLogin } from '../store/slices/user'

function ProtectedRoute({ redirectPath = '/signin'}) {
  const isAllowed = useSelector(isLogin)
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}
export default ProtectedRoute
