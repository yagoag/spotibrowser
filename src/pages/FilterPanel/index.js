import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterElement from '../../components/FilterElement';
import { setFilters } from '../../store/actions';
import filterDefs from './filters.json';
import './style.css';

const FilterPanel = ({ visible, onChange }) => {
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const changeSingleFilter = event => {
    const newState = { ...filters };
    newState[event.target.id] = event.target.value;
    dispatch(setFilters(newState));
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
    </div>
  );
};

export default FilterPanel;
