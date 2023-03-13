import styled from 'styled-components';

export const ColorOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 1rem;
`;

export const ColorButton = styled.button`
  background-color: ${(props) => props.color};
  border: ${(props) => (props.isSelected ? '2px solid #707070' : '2px solid #f2f2f2')};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.25rem;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
`;
