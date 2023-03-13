import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(22, 20, 17);
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const Icon = styled.img`
  height: 1.875rem;
`;

export const Title = styled.span`
  font-family: 'Bebas Neue', cursive;
  font-size: 2em;
  background-image: linear-gradient(gold, gold);
  background-size: 100% 5px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  transition: background-size .7s, background-position .5s ease-in-out;
  color: black;

  &:hover {
    background-size: 100% 100%;
    background-position: 0% 100%;
    transition: background-position .7s, background-size .5s ease-in-out;
  }
`;
