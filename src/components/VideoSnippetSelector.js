import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import './VideoSnippetSelector.scss';

const VideoSnippetSelector = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class={`video-snippet-selector`}>
        <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default VideoSnippetSelector;
