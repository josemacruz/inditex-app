import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = 'http://localhost:3000';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    postCard: builder.query({
      query: () => '/cart',
    }),
  }),
});

export const { usePostCardQuery } = cartApi;
