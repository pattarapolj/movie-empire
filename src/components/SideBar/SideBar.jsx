import React, { useState } from "react";
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    ListItemIcon,
    Box,
    CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useGetGenresQuery } from "../../services/TMDB";
import useStyles from "./styles";
import genreIcons from "../../assets/genres/index";

const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
];
const demoCategories = [
    { label: "Comedy", value: "comedy" },
    { label: "Action", value: "action" },
    { label: "Drama", value: "drama" },
    { label: "Horror", value: "horror" },
];
const redLogo =
    "https://fontmeme.com/permalink/250302/bd6fe692038f1cbec1f68ea8878ff448.png";
const blueLogo =
    "https://fontmeme.com/permalink/250302/82dd09a1212d1c7f9bcf684b3363c1ad.png";

const SideBar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const classes = useStyles();
    const { data, error, isFetching } = useGetGenresQuery();
    const dispatch = useDispatch();
    const { genreIdOrCategoryName } = useSelector(
        (state) => state.currentGenreOrCategory
    );

    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img
                    className={classes.image}
                    src={theme.palette.mode === "light" ? blueLogo : redLogo}
                    alt="MovieEmpire"
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to="/">
                        <ListItem
                            onClick={() => {
                                dispatch(selectGenreOrCategory(value));
                            }}
                            button="true"
                        >
                            <ListItemIcon>
                                <img
                                    src={genreIcons[label.toLowerCase()]}
                                    className={classes.genreImages}
                                    height={30}
                                />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {isFetching ? (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="100vh"
                    >
                        <CircularProgress size="4rem" />
                    </Box>
                ) : (
                    data?.genres.map(({ name, id }) => (
                        <Link key={id} className={classes.links} to="/">
                            <ListItem
                                onClick={() => {
                                    dispatch(selectGenreOrCategory(id));
                                }}
                                button="true"
                            >
                                <ListItemIcon>
                                    <img
                                        src={genreIcons[name.toLowerCase()]}
                                        className={classes.genreImages}
                                        height={30}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItem>
                        </Link>
                    ))
                )}
            </List>
        </>
    );
};

export default SideBar;
