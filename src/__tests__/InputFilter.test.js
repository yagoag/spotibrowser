import React from 'react';
import { shallow } from 'enzyme';
import InputFilter, { validateInput } from '../components/InputFilter';

jest.mock('react-redux');

describe('InputFilter', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<InputFilter validation={{}} />);
    expect(wrapper).not.toBeNull();
  });

  it('renders datetime input', () => {
    const definition = {
      validation: {
        primitiveType: 'STRING',
        entityType: 'DATE_TIME',
        pattern: 'yyyy-MM-ddTHH:mm:ss',
      },
    };
    const wrapper = shallow(<InputFilter {...definition} />);

    expect(wrapper.find('DateTimePicker').length).toEqual(1);
  });

  it('renders a text input', () => {
    const definition = {
      validation: {
        primitiveType: 'STRING',
      },
    };
    const wrapper = shallow(<InputFilter {...definition} />);

    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('renders a number input', () => {
    const definition = {
      validation: {
        primitiveType: 'INTEGER',
      },
    };
    const wrapper = shallow(<InputFilter {...definition} />);

    expect(wrapper.find('input[type="number"]').length).toEqual(1);
  });

  it('validates integer value', () => {
    expect(() => {
      validateInput('some string', { primitiveType: 'INTEGER', min: 5 });
    }).toThrow('must be an integer');
  });

  it('validates minimum value', () => {
    expect(() => {
      validateInput(4, { primitiveType: 'INTEGER', min: 5 });
    }).toThrow('must be at least 5');
  });

  it('validates maximum valus', () => {
    expect(() => {
      validateInput(6, { primitiveType: 'INTEGER', max: 5 });
    }).toThrow('must be at most 5');
  });
});
