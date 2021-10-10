import React from 'react';
import icon from '../assets/images/icon.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={icon} className="footer__img" alt="samuel icon" />
      <h4 className="footer__text">Samuel Medina Castro @samuel-mc</h4>
      <img src={icon} className="footer__img" alt="samuel icon" />
    </footer>
  );
};

export default Footer;
