import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Playlist from '../components/Playlist';

jest.mock('react-redux');

const playlist = {
  owner: { display_name: 'Yago' },
  images: [{ url: 'http://sha.rk/baby/cover.jpg' }],
  name: 'Baby Shark - Vol 1',
  external_urls: { spotify: 'http://sha.rk/baby' },
  artists: [{ id: 1, name: 'Baby Shark' }],
  tracks: { total: 1 },
};

describe('Playlist', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Playlist />);
    expect(wrapper).not.toBeNull();
  });

  it('renders skeleton on empty props', () => {
    const wrapper = mount(<Playlist />);
    expect(wrapper.find('.react-loading-skeleton').length).toEqual(4);
  });

  it('renders title', () => {
    const wrapper = shallow(<Playlist playlist={playlist} />);

    expect(wrapper.find('.info .name').text()).toEqual('Baby Shark - Vol 1');
  });

  it('renders owner name', () => {
    const wrapper = shallow(<Playlist playlist={playlist} />);

    expect(wrapper.find('.info .owner').text()).toEqual('Yago');
  });

  it('renders number of tracks for single track', () => {
    const wrapper = shallow(<Playlist playlist={playlist} />);

    expect(wrapper.contains('1 song')).toBeTruthy();
  });

  it('pluralizes "song" with multiple tracks', () => {
    const wrapper = shallow(
      <Playlist playlist={{ ...playlist, tracks: { total: 2 } }} />,
    );

    expect(wrapper.contains('2 songs')).toBeTruthy();
  });

  it('renders playlist image', () => {
    const wrapper = shallow(<Playlist playlist={playlist} />);

    expect(wrapper.find('img').prop('src')).toEqual(
      'http://sha.rk/baby/cover.jpg',
    );
  });

});
