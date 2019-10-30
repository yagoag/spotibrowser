import React from 'react';
import { shallow } from 'enzyme';
import App from '../pages/App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });
});
