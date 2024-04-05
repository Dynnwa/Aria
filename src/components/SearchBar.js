import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
    <div className="search-bar">
      <input type="text" placeholder="Find a Song" />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
