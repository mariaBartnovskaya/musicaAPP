export const setSelectedSongIndex = (index) => ({
      type: 'SET_SELECTED_SONG_INDEX',
      payload: index,
    });
  
  export const selectSong = (selectedIndex) => ({
      type: 'SELECT_SONG',
      payload: selectedIndex,
    });