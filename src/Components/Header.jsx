import { HashLink } from 'react-router-hash-link';
import { FaLaptopCode, FaAlignJustify, FaTimes  } from "react-icons/fa";
import ModeButton from "./ModeButton"
import React from 'react';
import '../styles/Header.css';


const Header = ({ darkMode, setDarkMode }) => {
  
  const [isOpen, setIsOpen] = React.useState(true);
  
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__title">
        <FaLaptopCode />
        <h2>samuel-mc</h2>
        {
          !isOpen
            ? <FaAlignJustify onClick={toggleMenu} className="toogle__item" />
            : <FaTimes onClick={toggleMenu} className="toogle__item" />
        }

      </div>
      <nav className={ isOpen ? "header__nav active" : "header__nav"}>
        <ul>
          <li className="nav__item">
            <HashLink to="#proyects">Proyectos</HashLink>
          </li>
          {/* <li className="nav__item">
            <HashLink to="#blog">Blog</HashLink>
          </li> */}
          <li className="nav__item">
            <HashLink to="#contact">Contacto</HashLink>
          </li>
          <li className={darkMode ? 'nav__item dark' : 'nav__item'}>
            <ModeButton changeMode={changeMode} darkMode={darkMode} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
