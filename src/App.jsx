import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Knowledge from './Components/Knowledge';
import Proyects from './components/Proyects'
import Contact from './Components/Contact';
import Footer from './components/Footer';

import icon from './assets/images/icon.png';

const App = () => {

  const [ darkMode, setDarkMode ] = React.useState(true);

  React.useEffect(()=>{
    if(darkMode) {
      document.body.style = 'background-color: var(--black)';
    } else {
      document.body.style = 'background-color: var(--white)';
    }
  })

  return (
    <>
      <Helmet>
        <title>Samuel Medina</title>
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
      </Helmet>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <Knowledge darkMode={darkMode} />
        <Proyects darkMode={darkMode} />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
