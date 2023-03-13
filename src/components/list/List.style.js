import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (max-width: 900px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-family: "Bebas Neue", cursive;
  font-size: 2em;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: #424242;
  text-transform: uppercase;
`;

export const Value = styled.span`
  font-weight: 400;
  color: #757575;
`;
