import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['review'],
    endpoints: (builder) => ({
        getReviews: builder.query({
            query: () => `/reviews`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'review', id })),
                        { type: 'review', id: 'LIST' }, // Track the list
                    ]
                    : [{ type: 'review', id: 'LIST' }],
        }),
        

        // delete Review
        deleteReview: builder.mutation({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'review', id },
                { type: 'review', id: 'LIST' }, 
            ],
        }),
        // add Review
        addReview: builder.mutation({
            query: (body) => ({
                url: `/reviews`,
                method: 'POST',
                body
            }),
            invalidatesTags:  [{ type: 'review', id: 'LIST' },] 
        }),
    })
})
export const { useGetReviewsQuery, useDeleteReviewMutation,useAddReviewMutation } = reviewApi;