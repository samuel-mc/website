import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import React from 'react';
import Container from './Container';
import '../styles/Contact.css';

const Contact = ({ darkMode }) =>
  <Container>
    <h2 className={darkMode ? 'container__title dark' : 'container__title'}>Contacto</h2>
    <div className={`contact ${darkMode ? 'dark' : ''}`}>
      <a 
        className="contact__item"
        href="mailto:smdoomed@gmail.com"
      >
        <FaEnvelope size='3em'/>
        <span className="contact__name">smdoomed@gmail.com</span>
      </a>
      <a
        className="contact__item"
        href="https://www.linkedin.com/in/samuel-mc/"
        target="_blank"
        rel="noopener noreferrer" 
      >
        <FaLinkedin size='3em'/>
        <span className="contact__name">Linkedin</span>
      </a>
      <a
        className="contact__item"
        href="https://github.com/samuel-mc"
        target="_blank"
        rel="noopener noreferrer" 
      >
        <FaGithub size='3em'/>
        <span className="contact__name">GitHub</span>
      </a>
    </div>
</Container>

export default Contact;
