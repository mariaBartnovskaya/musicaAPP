/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trackId: null,
}

const setTracks = createSlice({
  name: 'track',
  initialState,
  reducers: {
      setTrackPlay: (state, { payload }) => ({
          ...state,
          trackId: payload.id,
      }),
  }
})

export const { setTrackPlay  } = setTracks.actions
export default setTracks.reducer