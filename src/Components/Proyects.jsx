import React from 'react';
import quotes from '../assets/images/quotes.jpg';
import matches from '../assets/images/matches.jpg';

import '../styles/Proyects.css'

const Proyects = () => {
  return (
    <section className="container">
      <h2 className="container__title">Proyectos</h2>
      <div className="proyects">
        <div className="proyects__item">
          <h2 className="proyects__title">Footeros</h2>
          <img src={matches} alt="screenshot about a page" className="proyects__image" />
          <h3 className="proyects__description"> Sitio web que trae los resultados de las ligas más importantes del mundo. <br /> Link: <a href="https://samuel-mc.github.io/premier-league/" target="_blank">footeros</a></h3>
        </div>
        <div className="proyects__item">
          <h2 className="proyects__title">Quotes Chidas</h2>
          <img src={quotes} alt="screenshot about a page" className="proyects__image" />
          <h3 className="proyects__description"> Red social para compartir frases. <br /> Link: <a href="https://frases-chidas.web.app/" target="_blank">quotes-chidas</a></h3>
        </div>
      </div>


    </section>
  );
};

export default Proyects;
