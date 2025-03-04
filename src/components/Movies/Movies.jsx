import React, { useState, useEffect } from "react";
import {
    Box,
    CircularProgress,
    useMediaQuery,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../";

const Movies = () => {
    const [page, setPage] = useState(1);
    const { genreIdOrCategoryName, searchQuery } = useSelector(
        (state) => state.currentGenreOrCategory
    );
    const { data, error, isFetching } = useGetMoviesQuery({
        genreIdOrCategoryName,
        page,
        searchQuery,
    });

    if (isFetching) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress size="4rem" />
            </Box>
        );
    }

    if (!data?.results.length) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="20px"
            >
                <Typography variant="h5" color="textSecondary">
                    No movies found
                    <br />
                    Please try a different search
                </Typography>
            </Box>
        );
    }

    // if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <MovieList movies={data} />
        </div>
    );
};

export default Movies;
