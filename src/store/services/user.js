// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/',
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      }),
    }),
    postReg: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      }),
    }),
    postToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      }),
    }),
    postTokenRefresh: builder.mutation({
      query: (body) => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  usePostRegMutation,
  usePostLoginMutation,
  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = userApi