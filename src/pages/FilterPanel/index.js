import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterElement from '../../components/FilterElement';
import './style.css';

const { REACT_APP_FILTERS_API_URL } = process.env;

const FilterPanel = ({ filters, onChange }) => {
  const [filterDefs, setFilterDefs] = useState([]);

  useEffect(() => {
    fetchFilterDefs();

    const interval = setInterval(() => {
      fetchFilterDefs();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const fetchFilterDefs = async () => {
    const { data } = await axios.get(REACT_APP_FILTERS_API_URL);
    setFilterDefs(data.filters);
  };

  const changeSingleFilter = event => {
    const newState = { ...filters };
    newState[event.target.id] = event.target.value;
    onChange(newState);
  };

  return (
    <div className="filter-panel">
      <div className="app-title">SpotiBrowser</div>
      {filterDefs
        .filter(def => def.id !== 'offset' && def.id !== 'limit')
        .map(def => (
          <FilterElement
            key={def.id}
            definition={def}
            value={filters[def.id]}
            onChange={changeSingleFilter}
          ></FilterElement>
        ))}
    </div>
  );
};

export default FilterPanel;
