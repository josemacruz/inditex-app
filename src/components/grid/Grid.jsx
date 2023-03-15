import React from 'react';
import { Container, GridContainer } from './Grid.style';
import { getHash } from '../../utils/functions';

function GridComponent({ cards = [], component: Card, onClick }) {
  return (
    <Container>
      <GridContainer>
        {cards.map((card) => (
          <Card
            key={getHash(card.id)}
            id={card.id}
            imageSrc={card.image_url}
            brand={card.brand}
            model={card.model}
            price={card.price}
            onClick={onClick}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

export default GridComponent;
