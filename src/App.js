import React, {useState} from 'react';
import './App.css';
import Playlists from './pages/Playlists';
import FilterPanel from './pages/FilterPanel';

const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className="App">
      <FilterPanel filters={filters} onChange={setFilters} />
      <Playlists filters={filters} />
    </div>
  );
}

export default App;
