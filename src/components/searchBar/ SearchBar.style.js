import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 0.8em;
  line-height: 18px;
  color: #575756;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  padding: 0.75rem 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #575756;
  border-radius: 0;
  background-position: 100% center;
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 1.5rem;
  color: #575756;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;

  &::placeholder {
    font-weight: 400;
    display: block;
    line-height: 1;
    font-size: .75rem;
    letter-spacing: .23px;
    text-transform: uppercase;
  }
`;
