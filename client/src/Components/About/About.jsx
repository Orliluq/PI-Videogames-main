import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import './about.css';
import logo from '../../imag/myImagen.jpeg';
import instagram from '../../imag/icons/instagram.png';
import twitter from '../../imag/icons/gorjeo.png';
import github from '../../imag/icons/github.png';
import linkedin from '../../imag/icons/linkedin.png';

export default function About () {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  }

  return (
    <>
      <div className="background-about">
        <div className="container-about">
          <h2>Acerca de</h2>
          <p>
            Videogames: Proyecto individual hecho con el fin de crear una app web,
            front-end, back-end y base de datos, para probar los conocimientos
            adquiridos durante el bootcamp en Soy Henry.
          </p>
          <h2>Realizado con las tecnologías de:</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
          <li>API: rawg (https://rawg.io/apidocs)</li>
        </ul>
        <h3>Autor: Orlibet Dun</h3>
        </div>
        <div className="logo">
          <img
              src={logo}
              alt=""
              width="300px"
              style={{ borderRadius: '70%', marginTop: '25px', marginBottom: '10px' }}/>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/orlidevs" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" width="50px" />
          </a>
          <a href="https://www.twitter.com/orlidun" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" width="50px" />
          </a>
          <a href="https://www.github.com/Orliluq" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" width="50px" />
          </a>
          <a href="https://www.linkedin.com/in/orlibetdungonzalez" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" width="50px" />
          </a>
        </div>
        <div className="myImg">
          <img className="theImg" src="" alt="" />
        <Link to="/home" className={active ? 'active' : ''} onClick={handleClick}>
          <button className="mi-boton">VOLVER</button>
        </Link>
      </div>
    </div>
    </>
  );
};
