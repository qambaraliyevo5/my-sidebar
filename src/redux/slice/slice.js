// redux/slice/product.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../api/api';


export const ProductCrud = createApi({
  reducerPath: 'productCrud',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => 'products/?images=true',
      providesTags: ['Product'],
    }),
    getProductId: builder.query({
      query: (id) => `products/${id}/?images=true&category=true`,
      providesTags: ['Product'],
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: 'products/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `products/${id}/`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ProductCrud;
