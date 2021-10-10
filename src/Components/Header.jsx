import React from 'react';
import '../styles/Header.css';

const Header = ({ darkMode, setDarkMode }) => {


  const changeMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header className="header">
      <div className="header__title">
      <i className="fas fa-laptop-code"></i>
        <h2>samuel-mc</h2>
      </div>

      <nav className="header__nav">
        <ul>
          <li className="nav__item">Proyectos</li>
          <li className="nav__item">Blog</li>
          <li className="nav__item">Contacto</li>
          <li className={ darkMode ? 'nav__item dark' :"nav__item"}>
            <div className="mode-button">
              <span className="nav__item line"></span>
              <button type="button" onClick={()=>changeMode()}>
                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
