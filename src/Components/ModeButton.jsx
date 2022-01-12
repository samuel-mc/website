import React from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import '../styles/ModeButton.css';


const ModeButton = ({ changeMode, darkMode }) => (
    <>
    <input type="checkbox" name="switch" id="switch" onChange={changeMode}/>
            <label for="switch" >
              {
                darkMode
                ? 
                  <span className="moon">
                    <FaMoon />
                  </span>
                :  <span className="sun">
                    <FaSun />
                  </span>
              }
            </label>
    </>

)

export default ModeButton
