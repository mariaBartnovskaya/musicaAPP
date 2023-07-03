// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

/*  eslint no-param-reassign: "error"   */

const initialState = {
  isLogin: false,
  id: null,
  email: null,
  userName: null,
  token:null,

  
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
      state.access = action.payload.access
      
    },
    removeUser: (state) => {            
      state.id = ''
      state.email = ''
      state.userName = ''
      state.token = ''
     
    },
    setCurrentTrackID: (state, { payload }) => ({
      ...state,
      currentTrackID: payload.id,
    }),
    setRefresh: (state, { payload }) => ({
      ...state,
      refresh: payload.refresh,
    }),
    setAccess: (state, { payload }) => ({
      ...state,
      access: payload.access,
    }),
    
  },
})
export const { setUser, removeUser, setToken , setCurrentTrackID, setAccess,setRefresh} = userSlice.actions
export default userSlice.reducer
export const isLogin = (state) => state.user.isLogin
export const getUserID = (state) => state.user.id
export const selectCurrentTrackID = (state) => state.user.currentTrackID
