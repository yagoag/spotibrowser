import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import FilterElement from '../../components/FilterElement';
import './style.css';

const {REACT_APP_FILTERS_API_URL} = process.env;

const FilterPanel = ({filters, onChange}) => {
  const [filterDefs, setFilterDefs] = useState([]);
  const [time, setTime] = useState(null);
  const prevTimeRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    fetchFilterDefs();
    prevTimeRef.current = time;

    return () => clearInterval(interval);
  });

  const fetchFilterDefs = async () => {
    if (filterDefs.length === 0 || time !== prevTimeRef.current) {
      const {data} = await axios.get(REACT_APP_FILTERS_API_URL)
      setFilterDefs(data.filters);
    }
  };

  const changeSingleFilter = (event) => {
    const newState = {...filters};
    newState[event.target.id] = event.target.value;
    onChange(newState);
  }
  
  return (
    <div className="filter-panel">
      <div className="app-title">SpotiBrowser</div>
      {filterDefs.map(def => (
        <FilterElement key={def.id} definition={def} value={filters[def.id]} onChange={changeSingleFilter}></FilterElement>
      ))}
    </div>
  );
}

export default FilterPanel;