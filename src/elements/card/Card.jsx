import React from 'react';
import {
  Image, Brand, CardContainer, CardDetails,
  Model, Price, ImageBrand, ImageWrapper,
} from './Card.style';
import { handleKeyDown } from '../../utils';

function Card({
  id,
  brand,
  model,
  price,
  imageSrc,
  onClick,
}) {
  return (
    <CardContainer
      tabIndex="0"
      aria-label={`${brand} ${model} ${price || 0}`}
      onClick={() => onClick(id)}
      onKeyDown={(event) => handleKeyDown(event, () => onClick(id))}
    >
      <ImageBrand>{brand}</ImageBrand>
      <ImageWrapper>
        <Image src={imageSrc} alt={`${brand} ${model} image`} role="presentation" />
      </ImageWrapper>
      <CardDetails>
        <div>
          <Model>
            {model}
          </Model>
          <Price>
            {price || 0}
          </Price>
        </div>
        <Brand>
          {brand}
        </Brand>
      </CardDetails>
    </CardContainer>
  );
}

export default Card;
