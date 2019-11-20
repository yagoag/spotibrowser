import React from 'react';
import { shallow } from 'enzyme';
import Track from '../components/Track';
import Skeleton from 'react-loading-skeleton';

describe('Track', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Track />);
    expect(wrapper).not.toBeNull();
  });

  it('renders skeleton on empty props', () => {
    const wrapper = shallow(<Track />);
    expect(wrapper.find(Skeleton).length).toEqual(1);
  });

  it('renders track appropriately', () => {
    const track = {
      name: 'Baby Shark',
      external_urls: { spotify: 'http://sha.rk/baby' },
      artists: [{ id: 1, name: 'Baby Shark' }],
    };

    const wrapper = shallow(<Track track={track} />);

    expect(wrapper.find('.track-title').text()).toEqual('Baby Shark');
    expect(wrapper.find('.artist-list').text()).toEqual('Baby Shark');
  });

  it('cuts track names that are too long', () => {
    const track = {
      name: 'Baby Shark Doo Doo Do-Do-Do-Doo, Baby Shark Doo Doo Do-Do-Do-Doo',
      external_urls: { spotify: 'http://sha.rk/baby' },
      artists: [{ id: 1, name: 'Baby Shark' }],
    };

    const wrapper = shallow(<Track track={track} />);

    expect(wrapper.find('.track-title').text()).toEqual(
      'Baby Shark Doo Doo Do-Do-Do-Doo, Ba...',
    );
  });

  it('properly adds commas to separate multiple artists', () => {
    const track = {
      name: 'Baby Shark',
      external_urls: { spotify: 'http://sha.rk/baby' },
      artists: [
        { id: 1, name: 'Baby Shark' },
        { id: 2, name: 'Daddy Shark' },
        { id: 3, name: 'Mamma Shark' },
        { id: 4, name: 'Grandpa Shark' },
      ],
    };

    const wrapper = shallow(<Track track={track} />);

    expect(wrapper.find('.artist-list').text()).toEqual(
      'Baby Shark, Daddy Shark, Mamma Shark, Grandpa Shark',
    );
  });
});
