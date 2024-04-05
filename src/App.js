import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Track from './pages/Track';
import './App.scss';
import Results from './pages/Results';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/track' element={<Track/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
