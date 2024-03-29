import React, { useState } from 'react';

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="play-pause-button" onClick={handleClick}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;