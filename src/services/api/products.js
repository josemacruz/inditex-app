import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_DEV } from '../../utils';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_DEV }),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product',
    }),
    getProductsById: builder.query({
      query: (productId) => `/product/${productId}`,
    }),
  }),
});

export const {
  useGetProductsQuery, useGetProductsByIdQuery,
} = productsApi;
