import "./index.css";
import Header from "./components/header/header";
import Footer from "./components/footer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AboutMe from "./components/aboutme";

function App() {
  return (
    <>
      {/* This will be our nav bar */}
      <Header />
      {/* Content Here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<></>} />
      </Routes>
      {/*  */}
      <Footer />
    </>
  );
}

export default App;
