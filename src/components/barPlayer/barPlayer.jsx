/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */

import { useState, useEffect, useRef, useCallback } from 'react'


import 'react-loading-skeleton/dist/skeleton.css'

import { useDispatch, useSelector } from 'react-redux';
import s from './barPlayer.module.css'
import icon from '../assets/img/icon/sprite.svg'

import PlayerProgress from './progressBar'
import { selectSong } from '../../store/slices/selectSong';
import { useGetAllTracksQuery } from '../../store/services/musicApi';
import TrackPlay from './trackPlay';



function Player() {
  
  const dispatch = useDispatch()
    
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isRepeatOn, setIsRepeatOn] = useState(false);
  const selectedSong = useSelector((state) => state.selectedSong);
  const audioRef = useRef(null);
  const progressBarRef = useRef();

  const { data: tracks } = useGetAllTracksQuery();
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    if (audioRef.current) {
      const {currentTime} = audioRef.current;

      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / audioRef.current.duration) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, progressBarRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.track_file;
      audioRef.current.play();
      setIsPlaying(true);
      
    }
  }, [selectedSong]);

  const updateSelectedSong = (newTrack) => {
    dispatch(selectSong(newTrack));
  };
  const playNextSong = () => {
    if (selectedSong) {
      const selectedSongIndex = tracks.findIndex(
        (song) => song.id === selectedSong.id
      );
      let nextSongIndex;
      if (isShuffleOn) {
        nextSongIndex = Math.floor(Math.random() * tracks.length);
      } else if (isRepeatOn) {
        nextSongIndex = selectedSongIndex;
      } else {
        nextSongIndex = selectedSongIndex + 1;
      }
      if (nextSongIndex < tracks.length) {
        const nextSong = tracks[nextSongIndex];
       
        audioRef.current.src = nextSong.track_file;
        
        audioRef.current.play();
        setIsPlaying(true);
        updateSelectedSong(nextSong);
      } 
    }
  };

  const playPreviousSong = () => {
    if (selectedSong) {
      const selectedSongIndex = tracks.findIndex(
        (song) => song.id === selectedSong.id
      );
      const previousSongIndex = selectedSongIndex - 1;
      if (previousSongIndex >= 0) {
        const previousSong = tracks[previousSongIndex];
        audioRef.current.src = previousSong.track_file;
        audioRef.current.play();
        setIsPlaying(true);
        updateSelectedSong(previousSong);
      } 
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    setProgress(progressPercentage);
  };

  const handleClickProgress = (clickedPercentage) => {
    const audio = audioRef.current;
    const {duration} = audio;
  
    const newTime = (clickedPercentage / 100) * duration;

    audio.currentTime = newTime;
  };

  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
 
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  
  return (
    <div className={s.bar}>
      
      <div className={s.content}>
        <PlayerProgress
         progress={progress}
         onClick={handleClickProgress}
         audioRef={audioRef}
         progressBarRef={progressBarRef}
        />
        <div className={s.bar__playerBlock}>
          <div className={s.bar__player}>
            <div className={s.player__controls}>
              <div className={s.player__btn_prev}>
                
                <svg className={s.player__btn_prev_svg} alt="prev" onClick={playPreviousSong}>
                  <use xlinkHref={`${icon}#icon-prev`} />
                </svg>
              </div>
              <div className={`${s.player__btn_play} ${s.btn}`}
      onClick={togglePlay}
    >
      <svg className={s.player__btn_play_svg} alt="play">
        <use xlinkHref={`${icon}#icon-${isPlaying ? 'pause' : 'play'}`}></use>
      </svg>
    </div>

              <div className={s.player__btn_next}>
                <svg className={s.player__btn_next_svg} alt="next"onClick={playNextSong}>
                  <use xlinkHref={`${icon}#icon-next`} />
                </svg>
              </div>
              <div className={s.player__btn_repeat}>
                <svg className={s.player__btn_repeat_svg} alt="repeat"onClick={() => setIsRepeatOn(!isRepeatOn)}>
                  <use xlinkHref={`${icon}#icon-repeat`} />
                </svg>
              </div>
              <div className={s.player__btn_shuffle}>
                <svg className={s.player__btn_shuffle_svg} alt="shuffle"onClick={() => setIsShuffleOn(!isShuffleOn)}>
                  <use xlinkHref={`${icon}#icon-shuffle`} />
                </svg>
              </div>
            </div>

            <TrackPlay  author={selectedSong ? selectedSong.author : ''}
              album={selectedSong ? selectedSong.album : ''}
              audioRef={audioRef}
              updateProgress={updateProgress}/>
          </div>
          <div className={`${s.bar__volume_block} volume`}>
            <div className={s.volume__content}>
              <div className={s.volume__image}>
                <svg className={s.volume__svg} alt="volume">
                  <use xlinkHref={`${icon}#icon-volume`} />
                </svg>
              </div>
              <div className={s.volume__progress}>
                <input
                  className={s.volume__progress_line}
                  type="range"
                  name="range"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player