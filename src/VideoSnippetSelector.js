import React, { useState } from 'react';
import './VideoSnippetSelector.scss';

const VideoSnippetSelector = () => {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(100);

  const handleStartChange = (event) => {
    setStartValue(parseInt(event.target.value));
  };

  const handleEndChange = (event) => {
    setEndValue(parseInt(event.target.value));
  };

  return (
    <div className="video-snippet-selector">
      <input
        type="range"
        min="0"
        max="100"
        value={startValue}
        onChange={handleStartChange}
        className="slider"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={endValue}
        onChange={handleEndChange}
        className="slider"
      />
      <div className="highlight" style={{ left: `${startValue}%`, width: `${endValue - startValue}%` }}></div>
    </div>
  );
};

export default VideoSnippetSelector;
