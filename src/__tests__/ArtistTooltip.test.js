import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import mockAxios from '../__mocks__/axios';
import ArtistTooltip from '../components/ArtistTooltip';

import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
jest.mock('axios');

describe('ArtistTooltip', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ArtistTooltip name="Baby Shark" />);
    expect(wrapper).not.toBeNull();
  });

  it('renders skeleton when loading', () => {
    const wrapper = shallow(<ArtistTooltip name="Baby Shark" />);
    expect(wrapper.find(Skeleton).length).toEqual(3);
  });
});
