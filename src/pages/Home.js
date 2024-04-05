import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import './Home.scss';
const Home = () => {

    //const history = useNavigate();

    const handleSearch = () => {
        //history.push('/track');
    };
  
  return (
    <div className="home-container">
      <h1 className="title">Aria</h1>
      <h2>Something describing Aria in a elequant way</h2>
      <SearchBar onSearch={handleSearch}/>
    </div>
  );
};

export default Home;
