import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './style.css';

const Pagination = ({ offset, limit, total, setOffset, setLimit }) => {
  const [pageVal, setPageVal] = useState(null);

  const handlePageVal = e => {
    if (!isNaN(parseInt(e.target.value))) {
      setOffset((e.target.value - 1) * limit);
      setPageVal(null);
    } else {
      setPageVal(e.target.value);
    }
  };

  return (
    <div className="pagination">
      <FaAngleLeft
        onClick={() => offset >= limit - 1 && setOffset(offset - limit)}
        className={'arrow' + (offset < limit - 1 ? ' inactive' : '')}
      />
      Page
      <div className="input">
        <input
          type="text"
          className="page-number"
          value={pageVal || Math.ceil(offset / limit) + 1}
          onChange={handlePageVal}
        />
      </div>
      {' of ' + Math.ceil(total / limit)}
      <FaAngleRight
        onClick={() => offset < total - limit && setOffset(offset + limit)}
        className={'arrow' + (offset >= total - limit ? ' inactive' : '')}
      />
      {' | '}
      <div className="input">
        <select value={limit} onChange={e => setLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>{' '}
      items per page
    </div>
  );
};

export default Pagination;
