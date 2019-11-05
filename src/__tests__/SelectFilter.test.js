import React from 'react';
import { shallow } from 'enzyme';
import SelectFilter from '../components/SelectFilter';

describe('SelectFilter', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SelectFilter />);
    expect(wrapper).not.toBeNull();
  });

  it('is not open by default', () => {
    const wrapper = shallow(<SelectFilter />);
    expect(
      wrapper.find('StateManager[defaultMenuIsOpen=false]').length,
    ).toEqual(1);
  });

