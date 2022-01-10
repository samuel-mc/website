import React from 'react';
import Container from './Container';
import hcmedical from '../assets/images/hcmedical.jpg'
import albums from '../assets/images/albums.jpg';
import quotes from '../assets/images/quotes.jpg';
import matches from '../assets/images/matches.jpg';


import '../styles/Proyects.css';

const Proyects = ({ darkMode }) => 
    <Container id="proyects">
        <h2 className={darkMode ? 'container__title dark' : 'container__title'}>Proyectos</h2>
        <div className="proyects" id="proyects">
          <div className={darkMode ? 'proyects__item proyect1 dark' : 'proyects__item proyect1'}>
            <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
              HC - Medical
            </h2>
            <img
              src={hcmedical}
              alt="screenshot about a page"
              className="proyects__image proyects__image-16-9"
            />
            <h3
              className={
                darkMode ? 'proyects__description dark' : 'proyects__description'
              }
            >
              {' '}
              Sitio web que corresponde a un consultorio medico. <br /> Link:{' '}
              <a href="https://www.hcmedicalmexico.com.mx/" target="_blank" rel="noopener noreferrer">
                HC - Medical
              </a>
            </h3>
          </div>
          <div className={darkMode ? 'proyects__item proyect2 dark' : 'proyects__item proyect2'}>
            <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
              Tienda Virtual
            </h2>
            <img
              src={albums}
              alt="screenshot about a page"
              className="proyects__image proyects__image-16-9"
            />
            <h3
              className={
                darkMode ? 'proyects__description dark' : 'proyects__description'
              }
            >
              {' '}
              Tienda virtual para vender discos. <br /> Link:{' '}
              <a href="https://discos-chidos.web.app/#/" target="_blank" rel="noopener noreferrer">
                cd-store
              </a>
              {' / '}
              <a href="https://discos-chidos.web.app/#/seller" target="_blank" rel="noopener noreferrer">
                sección vendedor
              </a>
            </h3>
          </div>
          <div className={darkMode ? 'proyects__item proyect3 dark' : 'proyects__item proyect3'}>
            <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
              Footeros
            </h2>
            <img
              src={matches}
              alt="screenshot about a page"
              className="proyects__image proyects__image-16-9"
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
                rel="noopener noreferrer"
              >
                footeros
              </a>
            </h3>
          </div>
          <div className={darkMode ? 'proyects__item proyect4 dark' : 'proyects__item proyect4'}>
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
              <a href="https://frases-chidas.web.app/" target="_blank" rel="noopener noreferrer" >
                quotes-chidas
              </a>
            </h3>
          </div>
        </div>
    </Container>

export default Proyects;
