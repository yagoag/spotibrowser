import React from 'react';
import Select from 'react-select';

const SelectFilter = ({ id, values, onChange }) => {
  return (
    <Select
      name={id}
      options={values}
      defaultValue={{ label: 'United States', value: 'US' }}
      isSearchable={true}
      onChange={item => onChange({ target: { id: id, value: item.value } })}
      styles={styles}
    />
  );
};

const styles = {
  menu: provided => ({
    ...provided,
    color: '#000000',
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    minHeight: 'unset',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    paddingLeft: '4px',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    margin: '4px 0',
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: 0,
    paddingLeft: '4px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      (state.isSelected && '#1db954') || (state.isFocused && '#1db95433'),
    cursor: 'pointer',
  }),
};

export default SelectFilter;
