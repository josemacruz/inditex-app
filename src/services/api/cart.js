import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = 'http://localhost:3000';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ['Cart'],
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getItemCart: builder.query({
      query: () => '/cart',
      providesTags: ['Cart'],
    }),
    addItemToCart: builder.mutation({
      query: ({ productId, colorCode, storageCode }) => ({
        url: '/cart',
        method: 'POST',
        body: { productId, colorCode, storageCode },
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const { useAddItemToCartMutation, useGetItemCartQuery } = cartApi;
