import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const OptionButton = styled.button`
  padding: 1rem;
  margin: 0.25rem;
  border: ${({ isSelected }) => (isSelected ? '2px solid #707070' : '1px solid #ccc')};
  background-color: ${({ isSelected }) => (isSelected ? '#f2f2f2' : '#fff')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    transform: scale(0.95);
  }
`;
