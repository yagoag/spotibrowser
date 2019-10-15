import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './App.css';
import Playlists from './pages/Playlists';
import FilterPanel from './pages/FilterPanel';

const App = () => {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="App">
      <div id="header">
        <div className="app-title">SpotiBrowser</div>
        <button
          className="show-filters"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
          <span className="arrow">
            {showFilters ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </span>
        </button>
      </div>
      <FilterPanel
        visible={showFilters}
        filters={filters}
        onChange={setFilters}
      />
      <Playlists filters={filters} />
    </div>
  );
};

export default App;
