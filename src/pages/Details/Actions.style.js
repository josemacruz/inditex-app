import styled from 'styled-components';

export const ActionsContainer = styled.div`
  padding-bottom: 4rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryText};
  font-size: 1.125em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: grey;
    color: white;
  }

  &:active {
    background-color: black;
  }
`;
