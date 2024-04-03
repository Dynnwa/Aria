import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Track from './Track';
import './App.scss';
import Results from './Results';

function App() {
  return (
    <div className="app">
      <Results />
    </div>
  );
}

export default App;
