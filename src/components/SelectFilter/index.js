import React from 'react';

const SelectFilter = ({id, values, value, onChange}) => {
  return (
    <select id={id} value={value || ""} onChange={onChange}>
      <option style={{display: 'none'}} disabled value=""></option>
      {values.map(val => <option key={val.value} value={val.value}>{val.name}</option>)}
    </select>
  );
};

export default SelectFilter;