import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  justify-items: start;
  margin-left: 2rem;
  gap: 1.25rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-items: center;
    margin-left: 0;
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    justify-items: start;
    margin-left: 0;
  }

  @media screen and (min-width: 901px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    justify-items: start;
    margin-left: 0;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    justify-items: start;
    margin-left: 0;
  }

  @media screen and (min-width: 1401px) {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    justify-items: start;
    margin-left: 0;
  }
`;
