import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_DEV } from '../../utils/constant';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_DEV }),
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
