import React from 'react';
import Container from './Container';
import '../styles/Contact.css';

const Contact = ({ darkMode }) => (
  <Container>
    <h2 className={darkMode ? 'container__title dark' : 'container__title'}>Contacto</h2>
    <div className="contact">
      <a className="contact__item" href="mailto:smdoomed@gmail.com">
        <i className="fas fa-envelope fa-3x contact__icon"></i>
        <span className="contact__name">smdoomed@gmail.com</span>
      </a>
      <a
        className="contact__item"
        href="https://www.linkedin.com/in/samuel-mc/"
        target="_blank"
      >
        <i className="fab fa-linkedin fa-3x contact__icon"></i>
        <span className="contact__name">Linkedin</span>
      </a>
      <a
        className="contact__item"
        href="https://github.com/samuel-mc"
        target="_blank"
      >
        <i className="fab fa-github-square fa-3x contact__icon"></i>
        <span className="contact__name">GitHub</span>
      </a>
    </div>
  </Container>
);

export default Contact;
