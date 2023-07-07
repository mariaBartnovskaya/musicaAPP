// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/',
    tagTypes: ['Tracks'],
    prepareHeaders: (headers, { getState }) => {
      // eslint-disable-next-line prefer-destructuring
      const token  = getState().user.token
       console.log(token)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all',
      providesTags: ['Tracks'],
    }),
    getSelectMusic: builder.query({
      query: (id) => `catalog/selection/${id}`,
    }),

    setLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracks'],
    }),
    setUnlike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks'],
    }),
  }),
})

export const { useGetAllTracksQuery, useGetSelectMusicQuery, useSetLikeMutation, useSetUnlikeMutation } = musicApi;