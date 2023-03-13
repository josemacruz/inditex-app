import { useCallback, useEffect, useState } from 'react';
import { useGetProductsQuery } from '../services/api/products';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const { data, isFetching } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: 3600,
    pollingInterval: 3600000,
  });

  const onChange = useCallback((e) => {
    const searchText = e.target.value.toLowerCase();

    const filteredProducts = searchText ? data
      .filter((product) => product.brand.toLowerCase().includes(searchText)
    || product.model.toLowerCase().includes(searchText)) : data;

    setProducts(filteredProducts);
  }, [data]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return { products, isFetching, onChange };
}

export default useFetchProducts;
