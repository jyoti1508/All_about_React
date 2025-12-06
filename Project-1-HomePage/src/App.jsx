import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/Navigation";
import HeroSection from "./components/Hero";

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
    </>
  );
}

export default App;
