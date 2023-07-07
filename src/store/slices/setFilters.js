/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  years: '',
  author: [],
  genre: [],
  
};

const filteredTracksSlice = createSlice({
  name: 'filteredTracks',
  initialState,
  reducers: {
    setFilteredYears: (state, action) => {
      state.years = action.payload.years;
    },
    
    setFilteredGenre: (state, action) => {
      const genre = action.payload.genre;
      if (!state.genre.includes(genre)) {
        state.genre.push(genre);
        console.log(state);
      } else {
        state.genre = state.genre.filter((item) => item !== genre);
      }
    },
    setFilteredAuthor: (state, action) => {
      const author = action.payload.author;
      if (!state.author.includes(author)) {
        state.author.push(author);
        console.log(author);
      } else {
        state.author = state.author.filter((item) => item !== author);
      }
    },
  },
});

export const {
  setFilteredGenre,
  setFilteredAuthor,
  setFilteredYears,
  
} = filteredTracksSlice.actions;

export default filteredTracksSlice.reducer;