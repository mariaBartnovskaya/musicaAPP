/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import { musicApi } from './services/musicApi'
import { userApi } from './services/user'
import currentTrackReducer from './slices/setTracks'
import filteredTracksReducer from './slices/setFilters'
import selectedSongReducer from './slices/selectSong'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [musicApi.reducerPath]: musicApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    currentTrack: currentTrackReducer,
    filteredTracks: filteredTracksReducer,
    selectedSong: selectedSongReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([userApi.middleware, musicApi.middleware]),
})