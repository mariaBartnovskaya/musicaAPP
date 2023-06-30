/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {   
    track: {}
  };

const setTracks = createSlice({
  name: 'currentTrack',
    initialState,


  reducers: {   

    setCurrentTrack: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.track = action.payload.track;     
    },


  },
});

export const {setCurrentTrack} = setTracks.actions;
export default setTracks.reducer;