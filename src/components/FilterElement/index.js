import React from 'react';
import SelectFilter from '../SelectFilter';
import InputFilter from '../InputFilter';
import './style.css';

const FilterElement = ({definition, value, onChange}) => {
  const props = {
    id: definition.id,
    name: definition.name,
    value: value,
    onChange: onChange,
  }

  return (
    <div key={definition.id}>
      <div className="filter-name">{definition.name}</div>
      <div className="filter">
        {'values' in definition ? <SelectFilter values={definition.values} {...props} />
                                : <InputFilter validation={definition.validation} {...props} />}
      </div>
    </div>
  );
};

export default FilterElement;