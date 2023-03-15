import React, { useCallback, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsContainer, Button } from './Actions.style';
import ColorOptions from '../../components/colorOptions/ColorOptions';
import StorageOptions from '../../components/storageOptions/StorageOptions';
import { useAddItemToCartMutation } from '../../services/api/cart';
import {
  clearState, setColor, setError, setStorage,
} from '../../services/redux/cartSlice';
import { colorOptions, storageOptions } from '../../utils/constant';

function Actions({ productId }) {
  const { color, storage, error } = useSelector((state) => state.cart);

  const [addItemToCart] = useAddItemToCartMutation();

  const dispatch = useDispatch();

  const handleStorageChange = (option) => {
    dispatch(setStorage(option));
  };

  const handleColorChange = (option) => {
    dispatch(setColor(option));
  };

  const handleAddToCart = useCallback(async () => {
    dispatch(setError(null));

    try {
      await addItemToCart({
        productId, colorCode: color, storageCode: storage,
      }).unwrap();
    } catch (err) {
      dispatch(setError(err));
    }
  }, [color, storage]);

  useLayoutEffect(() => {
    dispatch(clearState());
  }, []);

  return (
    <ActionsContainer>
      <div>
        <StorageOptions
          selectedOption={storage}
          options={storageOptions}
          onChange={handleStorageChange}
        />
        <ColorOptions
          selectedOption={color}
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
