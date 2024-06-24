import './index.css';
import Header from './components/header/header';
import Footer from './components/footer';
import React from 'react';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <>
      <RouterProvider>
      {/* This will be our nav bar */}
      <Header />
      {/* Content Here */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<Home />}/>
        <Route path='/contact' element={<></>}/>
      </Routes>
      {/*  */}
      <Footer />
      </RouterProvider>
    </>
  );
}

export default App;
