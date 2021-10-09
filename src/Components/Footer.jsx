import React from 'react';
import icon from '../assets/images/icon.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__icon" src={icon} alt="icon" />
      <p className="footer__text">Samuel Medina Castro @samuel-mc</p>
      <img className="footer__icon" src={icon} alt="icon" />
    </footer>
  );
};

export default Footer;
