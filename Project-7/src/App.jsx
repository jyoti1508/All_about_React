import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavBar2 from "./components/NavBar2";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Kids from "./pages/Kids";
import Collections from "./pages/Collections";
import CollectionsDetails from "./pages/CollectionsDetails";

const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<CollectionsDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
