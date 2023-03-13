import React, { useMemo, useState } from 'react';
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

  const storageOptions = useMemo(() => ['64GB', '128GB', '256GB'].map((d, index) => ({ label: d, value: index })), []);
  const colorOptions = useMemo(() => ['sky', 'gold', 'red'].map((d, index) => ({ label: d, value: index })), []);

  return (
    <ActionsContainer>
      <div>
        <StorageOptions
          options={storageOptions}
          onChange={handleStorageChange}
        />
        <ColorOptions
          options={colorOptions}
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
