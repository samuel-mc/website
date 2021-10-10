import React from 'react';
import photo from '../assets/images/photo.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="presentation">
      <div className="presentation__info">
        <h1 className="info__name">Samuel Medina Castro</h1>
        <h2 className="info__description">[ Web Developer ]</h2>
      </div>
      <img className="photo" src={photo} alt="Profile photo" />
    </section>
  );
};

export default Hero;
