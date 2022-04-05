import React, { useEffect, useState } from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from './Recipe';
import NoResultPage from "./NoResultPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFound from "./PageNotFound";
import Favorites from "./Favorites";

function Pages({ isLoading, mobileMode, windowLoad }) {

const [favorites, setFavorites] = useState([localStorage.getItem('food-favorites')])


  // useEffect(() => {
  //   const foodFavorites = JSON.parse(
  //     localStorage.getItem('food-favorites')
  //   )

  //   setFavorites(foodFavorites)

  // }, [])



  const location = useLocation();
  return (
    <>

    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isLoading={isLoading} mobileMode={mobileMode} windowLoad={windowLoad} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/searched/" element={<NoResultPage />} />
        <Route path="/recipe/:name" element={<Recipe favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </AnimatePresence>

    </>
  );
}

export default Pages;