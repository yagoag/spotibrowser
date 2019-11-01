import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../components/Pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).not.toBeNull();
  });

  it('renders both page navigation arrows', () => {
    const wrapper = shallow(<Pagination offset="0" limit="5" total="50" />);

    expect(wrapper.find('FaAngleLeft').length).toEqual(1);
    expect(wrapper.find('FaAngleRight').length).toEqual(1);
  });

  it('render items per page', () => {
    const wrapper = shallow(<Pagination offset="0" limit="5" total="50" />);

    expect(wrapper.find('select.items-per-page').length).toEqual(1);
    expect(wrapper.contains('items per page')).toBeTruthy();
  });

  it('starts at page one', () => {
    const wrapper = shallow(<Pagination offset="0" limit="5" total="50" />);

    expect(wrapper.find('input.page-number[value=1]').length).toEqual(1);
  });

  it('calculates page number correctly', () => {
    const wrapper = shallow(<Pagination offset="15" limit="5" total="50" />);

    expect(wrapper.find('input.page-number[value=4]').length).toEqual(1);
  });

  it('calculates total page number correctly', () => {
    const wrapper = shallow(<Pagination offset="0" limit="5" total="51" />);

    expect(wrapper.contains(' of 11')).toBeTruthy();
  });

  it('disables previous page arrow on first page', () => {
    const wrapper = shallow(<Pagination offset="0" limit="5" total="50" />);

    expect(wrapper.find('FaAngleLeft.disabled').length).toEqual(1);
  });

  it('disables next page arrow on last page', () => {
    const wrapper = shallow(<Pagination offset="45" limit="5" total="50" />);

    expect(wrapper.find('FaAngleRight.disabled').length).toEqual(1);
  });

  it('respects the small prop', () => {
    const wrapper = shallow(
      <Pagination offset="0" limit="5" total="50" small />,
    );

    expect(wrapper.find('.pagination.small').length).toEqual(1);
  });
});
