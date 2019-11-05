import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow, mount } from 'enzyme';
import mockAxios from '../__mocks__/axios';
import ArtistTooltip from '../components/ArtistTooltip';

import axios from 'axios';
jest.mock('axios');

describe('ArtistTooltip', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ArtistTooltip name="Baby Shark" />);
    expect(wrapper).not.toBeNull();
  });

  it('renders skeleton when loading', () => {
    const wrapper = mount(<ArtistTooltip name="Baby Shark" />);
    expect(wrapper.find('.react-loading-skeleton').length).toEqual(3);
  });
});
