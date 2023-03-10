import React from 'react';
import { SearchBarContainer, SearchIcon, SearchInput } from './ SearchBar.style';

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search..." />
      <SearchIcon />
    </SearchBarContainer>
  );
}

export default SearchBar;
