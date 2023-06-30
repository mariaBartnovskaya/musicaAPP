// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const selectedSongSlice = createSlice({
  name: 'selectedSong',
  initialState: null,
  reducers: {
    selectSong: (state, action) => action.payload,
  },
});

export const { selectSong } = selectedSongSlice.actions;
export default selectedSongSlice.reducer;