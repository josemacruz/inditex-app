import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: 900px) {
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

export const NoDataText = styled.span`
  text-align: center;
  font-size: 1.25em;
`;
