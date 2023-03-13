import styled from 'styled-components';

export const HeaderWrapper = styled.header``;

export const FirstHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #8fbedb;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1.3rem;
`;

export const ProductsCount = styled.span`
  font-weight: 400;
  display: block;
  line-height: 1;
  font-size: .75em;
  letter-spacing: .23px;
  text-transform: uppercase;
`;

export const BreadcrumbsWrapper = styled.div`
  width: 80%;
`;

export const Separator = styled.hr`
  width: 80%;
`;

export const SecondHeader = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;
