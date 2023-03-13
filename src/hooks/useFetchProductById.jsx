import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../services/api/products';

function useFetchProductById() {
  const { pathname } = useLocation();

  const productId = useMemo(() => pathname.split('/').pop(), [pathname]);

  const { data, isFetching } = useGetProductsByIdQuery(productId, {
    refetchOnMountOrArgChange: 3600,
    pollingInterval: 3600000,
  });

  return { data, isFetching, productId };
}

export default useFetchProductById;
