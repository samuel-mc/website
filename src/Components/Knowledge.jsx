import React from 'react';
import Container from './Container';
import '../styles/Knowledge.css';

const KnowledgeItem = ({ darkMode, icon, name }) => {
  const itemClass = `glass-item knowledge__item ${ darkMode ? 'dark' : ''}`;

  return (
  <div className={itemClass}>
    <i className={`${icon} fa-3x knowledge__icon`}></i>
    <span className="knowledge__name"> {name}</span>
  </div>
  );
}

const Knowledge = ({ darkMode }) => {
  const titleClass = `container__title ${ darkMode ? 'dark' : ''}`;

  return (
    <Container>
      <h2 className={titleClass}>
        Conocimientos
      </h2>

      <div className="knowledge">
        <KnowledgeItem darkMode={darkMode} icon="fab fa-html5" name="HTML" />
        <KnowledgeItem darkMode={darkMode} icon="fab fa-css3-alt" name="CSS" />
        <KnowledgeItem darkMode={darkMode} icon="fab fa-js-square" name="Javascript" />
        <KnowledgeItem darkMode={darkMode} icon="fab fa-react" name="React JS" />
        <KnowledgeItem darkMode={darkMode} icon="fab fa-node-js" name="Node JS" />
        <KnowledgeItem darkMode={darkMode} icon="fas fa-database" name="Databases" />
        <KnowledgeItem darkMode={darkMode} icon="fab fa-java" name="Java " />
      </div>
    </Container>
  )};

export default Knowledge;
