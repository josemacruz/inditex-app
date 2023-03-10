import React from 'react';
import GridContainer from './Grid.style';
import getHash from '../../utils';

function GridComponent({ cards, component: Card }) {
  return (
    <GridContainer>
      {cards.map((card, index) => (
        <Card
          key={getHash(index)}
          brand={card.brand}
          model={card.model}
          price={card.brand}
        />
      ))}
    </GridContainer>
  );
}

export default GridComponent;
