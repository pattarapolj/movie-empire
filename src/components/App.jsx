import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Actors, MovieInformation, Movies, Profile, NavBar } from "./";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
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
