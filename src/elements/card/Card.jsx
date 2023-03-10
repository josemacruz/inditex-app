import React from 'react';
import {
  Image, Brand, CardContainer, CardDetails,
  Model, Price, ImageBrand, ImageWrapper,
} from './Card.style';

function Card({
  brand,
  model,
  price,
  imageSrc,
}) {
  return (
    <CardContainer>
      <ImageBrand>{brand}</ImageBrand>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
      <CardDetails>
        <div>
          <Model>
            {model}
          </Model>
          <Price>
            {`€ ${price || 0}`}
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
