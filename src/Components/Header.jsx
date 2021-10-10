import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">samuel-mc</div>

      <nav className="header__nav">
        <ul>
          <li className="nav__item">Proyectos</li>
          <li className="nav__item">Blog</li>
          <li className="nav__item">Contacto</li>
          <li className="nav__item">mode</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
