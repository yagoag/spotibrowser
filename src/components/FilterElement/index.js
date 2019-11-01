import React, { useState } from 'react';
import SelectFilter from '../SelectFilter';
import InputFilter from '../InputFilter';
import './style.css';

const FilterElement = ({ definition, value, onChange }) => {
  const [error, setError] = useState(null);

  const props = {
    id: definition.id,
    name: definition.name,
    defaultValue: definition.default,
    value: value,
    onChange: onChange,
  };

  return (
    <div key={definition.id} className="filter">
      <div className="filter-name">
        {definition.name}
        <span className="error-message"> {error}</span>
      </div>
      <div className={`filter-input${error ? ' error' : ''}`}>
        {'values' in definition ? (
          <SelectFilter values={definition.values} {...props} />
        ) : (
          <InputFilter
            validation={definition.validation}
            setError={setError}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default FilterElement;
