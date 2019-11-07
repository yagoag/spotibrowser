import React from 'react';
import { shallow } from 'enzyme';
import FilterElement from '../components/FilterElement';

describe('FilterElement', () => {
  it('renders without crashing', () => {
    const definition = {
      id: 'input',
      name: 'Search',
      validation: {
        primitiveType: 'STRING',
        entityType: 'TEXT',
      },
    };
    const wrapper = shallow(<FilterElement definition={definition} />);

    expect(wrapper).not.toBeNull();
  });

  it('displays non-select input', () => {
    const definition = {
      id: 'input',
      name: 'Search',
      validation: {
        primitiveType: 'STRING',
        entityType: 'TEXT',
      },
    };
    const wrapper = shallow(<FilterElement definition={definition} />);

    expect(wrapper.find('InputFilter').length).toEqual(1);
  });

  it('displays select input', () => {
    const definition = {
      id: 'country',
      name: 'Country',
      values: [
        {
          label: 'Algeria',
          value: 'DZ',
        },
      ],
    };
    const wrapper = shallow(<FilterElement definition={definition} />);

    expect(wrapper.find('SelectFilter').length).toEqual(1);
  });
});
