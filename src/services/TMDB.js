import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3",
    }),
    endpoints: (builder) => ({
        //* Get Genres
        getGenres: builder.query({
            query: () => {
                return `genre/movie/list?api_key=${tmdbApiKey}`;
            },
        }),

        //* Get Movies by [Type]
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
                //* Get Movies by Category
                if (
                    genreIdOrCategoryName &&
                    typeof genreIdOrCategoryName === "string"
                ) {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }

                //* Get Movies by Genre
                if (
                    genreIdOrCategoryName &&
                    typeof genreIdOrCategoryName === "number"
                ) {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }

                //* Search Movies
                if (searchQuery) {
                    return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
                }

                //* Get Popular Movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),
    }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
