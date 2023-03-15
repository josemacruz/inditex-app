import { RiShoppingBag2Fill } from 'react-icons/ri';
import styled from 'styled-components';

export const BagContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const BagIcon = styled(RiShoppingBag2Fill)`
  font-size: ${({ size }) => size || '2rem'};
  color: ${({ color }) => color || '#161411'};
`;

export const BagNumber = styled.span`
  position: absolute;
  top: 15px;
  left: 17px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(p) => p.theme.secondaryColor};
  color: #161411;
  font-size: 0.875em;
`;
