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

