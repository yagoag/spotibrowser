import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './style.css';

const Pagination = ({ offset, limit, total, setOffset, setLimit }) => (
  <div className="pagination">
    <FaAngleLeft
      onClick={() => offset >= limit - 1 && setOffset(offset - limit)}
      className={'arrow' + (offset < limit - 1 ? ' inactive' : '')}
    />
    Page {Math.ceil(offset / limit) + 1}
    {' of ' + Math.ceil(total / limit)}
    <FaAngleRight
      onClick={() => offset < total - limit && setOffset(offset + limit)}
      className={'arrow' + (offset >= total - limit ? ' inactive' : '')}
    />
    {' | '}
    <select value={limit} onChange={e => setLimit(e.target.value)}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>{' '}
    items per page
  </div>
);

export default Pagination;
