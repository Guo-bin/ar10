import React, { useState, useRef, useEffect } from "react";
import close from "public/images/icon/close.svg";
import Play from "components/AudioPlayer/Play";
import Pause from "components/AudioPlayer/Pause";
import styles from "./index.module.scss";
const AudioPlayer = ({ setOpenItem, openItem, audio }) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    setIsPlaying(false);
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  }, [openItem]);
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  const closeHandler = () => {
    audioPlayer.current.pause();
    setOpenItem(null);
  };
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer} src={audio} preload='metadata'></audio>

      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <Pause /> : <Play className={styles.play} />}
      </button>

      {/* current time */}

      {/* progress bar */}
      <div className={styles.barContainer}>
        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
        <input
          type='range'
          className={styles.progressBar}
          defaultValue='0'
          ref={progressBar}
          onChange={changeRange}
        />
        <div className={styles.duration}>
          {isNaN(duration) && "00:00"}
          {!isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
      <img
        className={styles.close}
        src={close.src}
        alt=''
        onClick={closeHandler}
      />
      {/* duration */}
    </div>
  );
};

export { AudioPlayer };
