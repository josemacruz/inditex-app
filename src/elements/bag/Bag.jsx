import React from 'react';
import { BagContainer, BagIcon, BagNumber } from './Bag.style';

function Bag({ size, color, count = 0 }) {
  return (
    <BagContainer>
      <BagIcon size={size} color={color} />
      <BagNumber>{count}</BagNumber>
    </BagContainer>
  );
}

export default Bag;
