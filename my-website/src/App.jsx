import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import React from 'react';

function App() {
  return (
    <div>
      {/* This will be our nav bar */}
      <Header />
      {/* Content Here */}
      
      {/* Everything below can become part of a larger compenent, the Footer */}
      <Footer />
    </div>
  );
}

export default App;
