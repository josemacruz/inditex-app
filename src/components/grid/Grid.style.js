import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: start;
  margin-left: 2rem;
  gap: 20px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-items: center;
    margin-left: 0;
  }
`;
