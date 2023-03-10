import styled from 'styled-components';

export const BreadCrumbs = styled.div`
  display: flex;
  gap: 0.33rem;
`;

export const BreadCrumbsText = styled.div`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 0.875em;

  & > a {
    text-decoration: none;
    color: #161411;
  
    &:hover {
      color: #d8866d;
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
