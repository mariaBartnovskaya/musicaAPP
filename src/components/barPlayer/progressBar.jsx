/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react'
import s from './progressBar.module.css'

function PlayerProgress({ audioRef, progressBarRef, duration }) {
  const [timeProgress, setTimeProgress] = useState(null)
  function updateWidth() {
    setTimeProgress(audioRef.current.currentTime)
    progressBarRef.current.value = timeProgress || 0
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(timeProgress / duration) * 100}%`
    )
  }
  useEffect(() => {
    const t = setInterval(() => {
      updateWidth()
    }, 300)
    return () => {
      clearInterval(t)
    }
  })

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
    updateWidth()
  }
  return (
    <input
      type="range"
      defaultValue="0"
      className={s.bar__player_progress}
      onChange={handleProgressChange}
      ref={progressBarRef}
    />
  )
}
export default PlayerProgress
