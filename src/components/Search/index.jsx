import React from 'react';
import { SearchWrapper } from './SearchWrapper.js';

const Search = () => {
  return (
    <SearchWrapper>
      <div className='search-section py-4 px-4'>
        <div className='input-group mb-3'>
          <span>
            <select className='form-control'>
              <option>Details</option>
            </select>
          </span>
          <input
            type='text'
            className='form-control'
            placeholder='Search Orders by Details...'
          />
          <div className='input-group-append'>
            <span
              className='input-group-text search-button'
              id='basic-addon2'
              style={{ background: 'var(--customSecondary)', color: '#ffffff' }}
            >
              <span className='fa fa-search'></span>
              {'   '}
              <b>SEARCH</b>
            </span>
          </div>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
