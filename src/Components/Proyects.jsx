/* eslint-disable react/self-closing-comp */
import React from 'react';

import Container from './Container';

import '../styles/Proyects.css';
import ImageSlider from './ImagesSlider';
import useProyects from '../hooks/useProyects';

const ProyectsItem = ({ darkMode, proyect }) => (
  <div className={`proyects__item ${darkMode ? 'dark' : ''}`}>
    <h2 className={darkMode ? 'proyects__title dark' : 'proyects__title'}>
      {proyect?.title}
    </h2>
    <img
      src={proyect?.images[0]}
      alt="Screenshot about a page"
      className="proyects__image proyects__image-16-9"
    />
    <h3 className={`proyects__description ${darkMode ? 'dark' : ''}`}>
      {proyect?.description} <br />
    </h3>
  </div>
);

const Proyects = ({ darkMode }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [currentProyect, setCurrentProyect] = React.useState(null);

  const { proyects } = useProyects();

  const handleShowModal = (proyect) => {
    setCurrentProyect(proyect);
    setShowModal(true);
  };

  return (
    <Container id="proyects">
      <h2 className={darkMode ? 'container__title dark' : 'container__title'}>
        Proyectos
      </h2>
      <div className="proyects" id="proyects">
        {proyects.map((proyect) => (
          <button
            type="button"
            className="proyect__button"
            onClick={() => handleShowModal(proyect)}
          >
            <ProyectsItem
              key={proyect.title}
              darkMode={darkMode}
              proyect={proyect}
            />
          </button>
        ))}
      </div>

      <div className={`modal__bg ${showModal ? 'showed' : 'hidden'}`}></div>
      <div className={`modal__container ${showModal ? 'showed' : 'hidden'}`}>
        <div className="modal__close">
          <button type="button" onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal__text">
          <h3>{currentProyect?.title}</h3>
          <p>{currentProyect?.description}</p>
        </div>
        <a
          href={currentProyect?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="modal__btn"
        >
          Ir al sitio
        </a>
        <ImageSlider items={currentProyect?.images} />
      </div>
    </Container>
  );
};

export default Proyects;
