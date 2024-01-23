import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string
};

type Data = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

const URL = 'https://dummyjson.com'

export const productApi = createApi({
    reducerPath: "productApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        fetchProducts: builder.query<Data, null>({
            query: () => "products",
        }),
        fetchProductById: builder.query<Product, { id: string }>({
            query: ({ id }) => `products/${id}`,
        }),
    }),
});

export const { useFetchProductByIdQuery, useFetchProductsQuery } = productApi;