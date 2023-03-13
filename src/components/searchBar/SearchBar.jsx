import React from 'react';
import { SearchBarContainer, SearchIcon, SearchInput } from './ SearchBar.style';
import { handleKeyDown } from '../../utils';

function SearchBar({ value, onSearch }) {
  return (
    <SearchBarContainer>
      <SearchInput
        id="search-input"
        value={value}
        type="text"
        placeholder="Search..."
        onChange={onSearch}
        onKeyDown={(event) => handleKeyDown(event, onSearch(event.target.value))}
        aria-labelledby="search-input"
      />
      <SearchIcon title="Search" aria-label="Search" />
    </SearchBarContainer>
  );
}

export default SearchBar;
