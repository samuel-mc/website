import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Knowledge from './Components/Knowledge';
import Contact from './Components/Contact';
import Footer from './components/Footer';

import icon from "./assets/images/icon.png";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Samuel Medina</title>
        <link rel="icon" type="image/png" href={icon} sizes="16x16"/>
      </Helmet>

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
