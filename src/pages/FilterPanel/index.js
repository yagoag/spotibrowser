import React from 'react';
import FilterElement from '../../components/FilterElement';
import filterDefs from './filters.json';
import './style.css';

const FilterPanel = ({ visible, filters, onChange }) => {
  const changeSingleFilter = event => {
    const newState = { ...filters };
    newState[event.target.id] = event.target.value;
    onChange(newState);
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
