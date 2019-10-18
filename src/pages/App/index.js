import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './style.css';
import Playlists from '../Playlists';
import FilterPanel from '../FilterPanel';
import Tracks from '../Tracks';

const App = () => {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activePlaylist, setActivePlaylist] = useState(null);

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
      <div id="contents">
        <Playlists
          filters={filters}
          activePlaylist={activePlaylist}
          setActivePlaylist={setActivePlaylist}
        />
        {activePlaylist !== null && <Tracks playlist={activePlaylist} />}
      </div>
    </div>
  );
};

export default App;
