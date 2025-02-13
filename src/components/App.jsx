import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import useStyles from "./styles";

import { Actors, MovieInformation, Movies, Profile, NavBar } from "./";

const App = () => {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" exact element={<MovieInformation />} />
          <Route path="/actors/:id" exact element={<Actors />} />
          <Route path="/" exact element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
