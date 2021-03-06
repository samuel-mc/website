import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import icon from './assets/images/icon.png';
import Hero from './components/Hero';
import Knowledge from './components/Knowledge';
import Proyects from './components/Proyects';
import Blog from './components/Blog';
import Contact from './components/Contact';

import './styles/App.css';

const App = () => {

  const [ darkMode, setDarkMode ] = React.useState(true);

  React.useEffect(()=>{
    if(darkMode) {
      document.body.style = 'background-color: var(--black)';
    } else {
      document.body.style = 'background-color: var(--white)';
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <Helmet>
        <title>Samuel Medina</title>
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
      </Helmet>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main">
          <Hero darkMode={darkMode} />
          <Knowledge darkMode={darkMode} />
          <Proyects darkMode={darkMode}/>
          {/* <Blog darkMode={darkMode} /> */}
          <Contact darkMode={darkMode} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
