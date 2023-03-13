import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 4.7rem 2rem 1.3rem;

  @media screen and (max-width: 600px) {
    margin: 1rem;
  }
`;

export const ProductsCount = styled.span`
  font-weight: 400;
  display: block;
  line-height: 1;
  font-size: .75rem;
  letter-spacing: .23px;
  text-transform: uppercase;
`;
