import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import './styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import icon from './assets/images/icon.png';

const Hero = lazy(() => import('./components/Hero'));
const Knowledge = lazy(() => import('./components/Knowledge'));
const Proyects = lazy(() => import('./components/Proyects'));
const Contact = lazy(() => import('./components/Contact'));


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
        <Suspense fallback={<h1>cargando</h1>}>
          <Hero darkMode={darkMode} />
          <Knowledge darkMode={darkMode} />
          <Proyects darkMode={darkMode} />
          <Contact />
        </Suspense>
      </main>
      <Footer />

    </>
  );
};

export default App;
