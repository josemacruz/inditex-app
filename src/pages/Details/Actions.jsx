import React, { useState } from 'react';
import { ActionsContainer, Button } from './Actions.style';
import ColorOptions from '../../components/colorOptions/ColorOptions';
import StorageOptions from '../../components/storageOptions/StorageOptions';
import { useAddItemToCartMutation } from '../../services/api/cart';

function Actions({ productId }) {
  const [error, setError] = useState(null);
  const [storage, setStorage] = useState('64GB');
  const [color, setColor] = useState('sky');

  const [addItemToCart] = useAddItemToCartMutation();

  const handleStorageChange = (option) => {
    setStorage(option);
  };

  const handleColorChange = (option) => {
    setColor(option);
  };

  const handleAddToCart = async () => {
    setError(null);

    try {
      await addItemToCart({ productId, colorCode: color, storageCode: storage }).unwrap();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <ActionsContainer>
      <div>
        <StorageOptions
          options={['64GB', '128GB', '256GB']}
          onChange={handleStorageChange}
        />
        <ColorOptions
          options={['sky', 'gold', 'red']}
          onChange={handleColorChange}
        />
      </div>
      <br />
      <div>
        {error && <div>Hubo un error al agregar el artículo a su carrito.</div>}
        <Button onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </div>
    </ActionsContainer>
  );
}

export default Actions;
