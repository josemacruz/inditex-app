import React, { useMemo } from 'react';
import {
  Container, Label, ListItem, Title, Value, List,
} from './List.style';
import { getHash } from '../../utils';

function ListItems({ data }) {
  const itemData = useMemo(() => [
    { label: 'Marca', value: data.brand },
    { label: 'Modelo', value: data.model },
    { label: 'Precio', value: data.price },
    { label: 'CPU', value: data.processor },
    { label: 'RAM', value: data.ram },
    { label: 'Sistema Operativo', value: data.operating_system },
    { label: 'Resolución de pantalla', value: data.screen_resolution },
    { label: 'Batería', value: data.battery },
    { label: 'Cámaras', value: data.cameras },
    { label: 'Dimensiones', value: data.dimensions },
    { label: 'Peso', value: data.weight },
  ], [data]);

  return (
    <Container>
      <Title>Descripción</Title>
      <List>
        {itemData.map((item, index) => (
          <ListItem key={getHash(index)}>
            <Label>
              {item.label}
              :
            </Label>
            <Value>{item.value}</Value>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ListItems;
