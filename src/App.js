import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Track from './Track';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Track />
    </div>
  );
}

export default App;
