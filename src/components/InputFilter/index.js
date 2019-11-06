import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch } from 'react-redux';
import { setAutoRefresh } from '../../store/actions';
import './style.css';

const SelectFilter = ({ id, name, validation, value, onChange, setError }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    try {
      validateInput(event.target.value, validation);
      setError(null);
    } catch (error) {
      setError(error.message.replace('{name}', name));
    } finally {
      onChange(event);
    }
  };

  const handleDateTimeChange = dateTime => {
    dispatch(setAutoRefresh(!dateTime));
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
      throw new Error('must be an integer');
    }
    if (validation.min) {
      if (parsedVal < validation.min) {
        throw new Error('must be at least ' + validation.min);
      }
    }
    if (validation.max) {
      if (parsedVal > validation.max) {
        throw new Error('must be at most ' + validation.max);
      }
    }
  }
};

export default SelectFilter;
export { validateInput };
