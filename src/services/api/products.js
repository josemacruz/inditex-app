import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = 'http://localhost:3000';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
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
