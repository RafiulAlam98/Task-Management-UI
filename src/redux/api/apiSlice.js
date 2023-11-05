import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task-management-api-sigma.vercel.app',
  }),
  tagTypes: ['tasks'],
  endpoints: () => ({}),
});
