import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default GridContainer;
