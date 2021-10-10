import React from 'react';
import '../styles/Knowledge.css';

const Knowledge = ({ darkMode }) => (
  <section className="conainer">
    <h2 className={darkMode ? 'container__title dark' : 'container__title'}>
      {' '}
      Conocimientos{' '}
    </h2>

    <div className="knowledge">
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fab fa-html5 fa-3x knowledge__icon"></i>
        <span className="knowledge__name"> HTML</span>
      </div>
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fab fa-css3-alt fa-3x knowledge__icon"></i>
        <span className="knowledge__name"> CSS</span>
      </div>
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fab fa-js-square fa-3x knowledge__icon"></i>
        <span className="knowledge__name">Javascript</span>
      </div>
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fab fa-react fa-3x knowledge__icon"></i>
        <span className="knowledge__name">ReactJS</span>
      </div>
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fab fa-node-js fa-3x knowledge__icon"></i>
        <span className="knowledge__name">NodeJS</span>
      </div>
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fas fa-database fa-3x knowledge__icon"></i>
        <span className="knowledge__name">Databases</span>
      </div>
      <div className={darkMode ? 'knowledge__item dark' : 'knowledge__item'}>
        <i className="fab fa-java fa-3x knowledge__icon"></i>
        <span className="knowledge__name">Java</span>
      </div>
    </div>
  </section>
);

export default Knowledge;
