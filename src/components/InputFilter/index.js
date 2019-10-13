import React from 'react';
import DateTimePicker from 'react-datetime-picker';

const SelectFilter = ({ id, name, validation, value, onChange }) => {
  const handleChange = event => {
    try {
      validateInput(event.target.value, validation);
      onChange(event);
    } catch (error) {
      alert(error.message.replace('{name}', name));
    }
  };

  const handleDateTimeChange = dateTime => {
    onChange({ target: { id: id, value: dateTime } });
  };

  if ('entityType' in validation && validation.entityType === 'DATE_TIME') {
    return <DateTimePicker value={value} onChange={handleDateTimeChange} />;
  } else {
    return (
      <input
        type={validation.primitiveType === 'INTEGER' ? 'number' : 'text'}
        id={id}
        value={value || ''}
        onChange={handleChange}
      />
    );
  }
};

const validateInput = (value, validation) => {
  if (validation.primitiveType === 'INTEGER') {
    const parsedVal = parseInt(value);
    if (!/^\d*$/.test(value)) {
      throw new Error('{name} must be an integer');
    }
    if (validation.min) {
      if (parsedVal < validation.min) {
        throw new Error(
          'The value of {name} must be at least ' + validation.min,
        );
      }
    }
    if (validation.max) {
      if (parsedVal > validation.max) {
        throw new Error(
          'The value of {name} must be at most ' + validation.max,
        );
      }
    }
  }
};

export default SelectFilter;
