/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {   
    years: [],
    author: [],
    genre: [],
    serchInp: '',
  };

const setFilters = createSlice({
  name: 'setFilters',
    initialState,
  

  reducers: {   
    setFilterYears: (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.years = action.payload.years;     
    },

    removeFilterYears: (state) => {
        // eslint-disable-next-line no-param-reassign
      state.years = [];     
  },

    setFilterAuthor: (state, action) => { 
         
        if(state.author.includes(action.payload.author)){
            return
        }       
        state.author.push(action.payload.author);     
        },

        removeFilterAuthor: (state) => {
            // eslint-disable-next-line no-param-reassign
          state.author = [];     
      },

    setFilterGenre: (state, action) => {

        if(state.genre.includes(action.payload.genre)){
            return
        } 
        state.genre.push(action.payload.genre);       
    },
   removeFilterGenre: (state) => {
    // eslint-disable-next-line no-param-reassign
          state.genre = [];     
      },
    setFilterInp: (state, action) => ({
      ...state,
      serchInp: action.payload.serchInp       
    }),
  },
});

export const {setFilterYears, setFilterAuthor, setFilterGenre, removeFilterYears, removeFilterAuthor, removeFilterGenre, setFilterInp} = setFilters.actions;
export default setFilters.reducer;