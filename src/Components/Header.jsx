import { HashLink } from 'react-router-hash-link';
import { FaLaptopCode, FaSun, FaMoon } from "react-icons/fa";

import React from 'react';
import '../styles/Header.css';


const Header = ({ darkMode, setDarkMode }) => {
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="header__title">
        <FaLaptopCode />
        <h2>samuel-mc</h2>
      </div>

      <nav className="header__nav">
        <ul>
          <li className="nav__item">
            <HashLink to="#proyects">Proyectos</HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="#blog">Blog</HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="#contact">Contacto</HashLink>
          </li>
          <li className={darkMode ? 'nav__item dark' : 'nav__item'}>
            <div className="mode-button">
              <span className="nav__item line"></span>
              <button type="button" onClick={() => changeMode()}>
                {darkMode ? (
                  <FaSun/>
                ) : (
                  <FaMoon />
                )}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
