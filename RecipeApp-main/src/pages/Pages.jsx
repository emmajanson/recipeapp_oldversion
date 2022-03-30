import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from './Recipe';
import NoResultPage from "./NoResultPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFound from "./PageNotFound";

function Pages({ isLoading, mobileMode, windowLoad }) {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isLoading={isLoading} mobileMode={mobileMode} windowLoad={windowLoad} />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/searched/" element={<NoResultPage />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </AnimatePresence>
  );
}

export default Pages;