import styled from 'styled-components';

export const BreadCrumbs = styled.div`
  display: flex;
  gap: 0.33rem;
`;

export const BreadCrumbsText = styled.div`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 0.875em;

  & > a {
    text-decoration: none;
    color: ${({ isActive, theme }) => (isActive ? theme.primaryColor : '#161411')};
  
    &:hover {
      color: ${({ isActive, theme }) => (isActive ? '#161411' : theme.primaryColor)};
    }
  }

  &:after {
    margin-left: 0.33rem;
    content: '/';
  }

  &:last-child:after {
    display: none;
  }
`;
