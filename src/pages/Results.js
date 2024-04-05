import React from 'react';
import VideoSnippetSelector from '../components/VideoSnippetSelector';
import PlayPause from '../components/PlayPause';
import './Results.scss';

const Results = () => {
  return (
    <div className="container">
      <span className="search">
        <div className="image">
        <img src="path_to_your_image.jpg" alt="Your Image" />
      </div>
      <div className="card">
        <h2>Title</h2>
        <p>Artist</p>
      </div>
      </span>
      <div className="list">
        <h2>List Title</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Results;