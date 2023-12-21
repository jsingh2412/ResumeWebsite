import './index.css';
import ContactMe from './components/contactme';
import Header from './components/header';
import SocialMediaCard from './components/socialmediacard';

import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <SocialMediaCard />
      <ContactMe />
    </div>
  );
}

export default App;
