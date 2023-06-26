// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

/*  eslint no-param-reassign: "error"   */

const initialState = {
  isLogin: false,
  id: null,
  email: null,
  userName: null,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload
      },
    setUser: (state, action) => {
      
      state.id = action.payload.id
      state.email = action.payload.email
      state.userName = action.payload.userName
      state.token = action.payload.token
      state.isLogin = true
    },
    removeUser: (state) => {            
      state.id = ''
      state.email = ''
      state.userName = ''
      state.token = ''
    },
   
    
  },
})
export const { setUser, removeUser, setToken } = userSlice.actions
export default userSlice.reducer
export const isLogin = (state) => state.user.isLogin
