import React from 'react';
import Container from './Container';
import quotes from '../assets/images/quotes.jpg';
import matches from '../assets/images/matches.jpg';

import '../styles/Proyects.css';

const Proyects = ({ darkMode }) => 
    <Container>
        <h2 className={darkMode ? 'container__title dark' : 'container__title'}>Proyectos</h2>
        <div className="proyects">
          <div className={darkMode ? 'proyects__item proyect1 dark' : 'proyects__item proyect1'}>
            <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
              Footeros
            </h2>
            <img
              src={matches}
              alt="screenshot about a page"
              className="proyects__image"
            />
            <h3
              className={
                darkMode ? 'proyects__description dark' : 'proyects__description'
              }
            >
              {' '}
              Sitio web que trae los resultados de las ligas más importantes del
              mundo. <br /> Link:{' '}
              <a
                href="https://samuel-mc.github.io/premier-league/"
                target="_blank"
              >
                footeros
              </a>
            </h3>
          </div>
          <div className={darkMode ? 'proyects__item proyect2 dark' : 'proyects__item proyect2'}>
            <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
              Quotes Chidas
            </h2>
            <img
              src={quotes}
              alt="screenshot about a page"
              className="proyects__image"
            />
            <h3
              className={
                darkMode ? 'proyects__description dark' : 'proyects__description'
              }
            >
              {' '}
              Red social para compartir frases. <br /> Link:{' '}
              <a href="https://frases-chidas.web.app/" target="_blank">
                quotes-chidas
              </a>
            </h3>
          </div>
        </div>
    </Container>

export default Proyects;
