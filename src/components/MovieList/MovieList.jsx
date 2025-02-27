import React from "react";
import { Grid2 as Grid } from "@mui/material";

import useStyles from "./styles";

import { Movie } from "../";

const MovieList = ({ movies }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.moviesContainer}>
            {movies?.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    );
};

export default MovieList;
