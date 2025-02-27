import React from "react";
import {
    Typography,
    Grid2 as Grid,
    Grow,
    Tooltip,
    Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Movie = ({ movie, i }) => {
    const classes = useStyles();
    console.log(Movie, i);

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            className={classes.movie}
        >
            <Grow in key={i} timeout={(i + 1) * 150}>
                <Link className={classes.links} to={`/movie/${movie.id}`}>
                    <img
                        className={classes.image}
                        alt={movie.title}
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : "https://kfcb.go.ke/sites/default/files/2021-03/500x735_3.png"
                        }
                    />
                    <Typography className={classes.title} variant="h5">
                        {movie.title}
                    </Typography>
                    <Tooltip
                        disableTouchListener
                        title={`Rating: ${movie.vote_average.toFixed(1)}/10`}
                    >
                        <div>
                            <Rating
                                readOnly
                                value={movie.vote_average / 2}
                                precision={0.1}
                            />
                        </div>
                    </Tooltip>
                </Link>
            </Grow>
        </Grid>
    );
};

export default Movie;
