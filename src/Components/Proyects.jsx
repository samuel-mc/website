import React from 'react';
import Container from './Container';
import hcmedical from '../assets/images/hcmedical.jpg';
import albums from '../assets/images/albums.jpg';
import quotes from '../assets/images/quotes.jpg';
import matches from '../assets/images/matches.jpg';

import '../styles/Proyects.css';

const ProyectsItem = ({ darkMode, title, image, description, link }) => (
  <div className={`glass-item proyects__item ${darkMode ? 'dark' : ''}`}>
    <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
      {title}
    </h2>
    <img
      src={image}
      alt="Screenshot about a page"
      className="proyects__image proyects__image-16-9"
    />
    <h3 className={`proyects__description ${darkMode ? 'dark' : ''}`}>
      {description} <br />
    </h3>
    
    <a className="item__link" href={link} target="_blank" rel="noopener noreferrer">
      Link
    </a>
  </div>
);

const Proyects = ({ darkMode }) => (
  <Container id="proyects">
    <h2 className={darkMode ? 'container__title dark' : 'container__title'}>
      Proyectos
    </h2>
    <div className="proyects" id="proyects">
      <ProyectsItem
        title="HC - Medical"
        darkMode={darkMode}
        image={hcmedical}
        description="Sitio web que corresponde a un consultorio medico para personas con heridas crónicas."
        link="https://www.hcmedicalmexico.com.mx/"
      />
      <ProyectsItem
        title="Albums Store"
        darkMode={darkMode}
        image={albums}
        description="Tienda de comercio virtual que permite comprar y vender discos."
        link="https://discos-chidos.web.app/#/"
      />
      <ProyectsItem
        title="Cool Quotes"
        darkMode={darkMode}
        image={quotes}
        description="Sitio web que permite a los usuarios 'postear' sus frases favoritas."
        link="https://frases-chidas.web.app/"
      />
      <ProyectsItem
        title="Footeros"
        darkMode={darkMode}
        image={matches}
        description="Sitio web que despliega los resultados de las mejores ligas del mundo."
        link="https://samuel-mc.github.io/premier-league/"
      />
    </div>
  </Container>
);

export default Proyects;
