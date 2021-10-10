import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Knowledge from './Components/Knowledge';
import Contact from './Components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <Knowledge />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
