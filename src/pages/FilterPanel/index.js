import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterElement from '../../components/FilterElement';
import { setFilters, setAutoRefresh } from '../../store/actions';
import filterDefs from './filters.json';
import './style.css';

const FilterPanel = ({ visible }) => {
  const filters = useSelector(state => state.filters);
  const autoRefresh = useSelector(state => state.autoRefresh);
  const dispatch = useDispatch();

  const changeSingleFilter = event => {
    const newState = { ...filters };
    newState[event.target.id] = event.target.value;
    dispatch(setFilters(newState));
  };

  const changeAutoRefresh = event => {
    dispatch(setAutoRefresh(event.target.checked));
  };

  return (
    <div className={'filter-panel' + (visible ? ' visible' : '')}>
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
      <div className="auto-refresh">
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={changeAutoRefresh}
        />{' '}
        Enable auto-refresh
      </div>
    </div>
  );
};

export default FilterPanel;
