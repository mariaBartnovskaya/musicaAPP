/* eslint-disable no-param-reassign */

import s from './progressBar.module.css'

function PlayerProgress({ audioRef, progressBarRef }) {

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };
  

  return <input type="range" defaultValue="0" ref={progressBarRef} className={s.bar__player_progress} onChange={handleProgressChange} />
}
export default PlayerProgress
