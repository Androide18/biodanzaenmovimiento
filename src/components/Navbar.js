import React from "react";
import "../assets/css/App.css";
import { Link } from "react-router-dom";
import logoRGB from "../assets/images/Logo_Color_RGB.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
      <Link className="link-tucan" to="/">
          <img src={logoRGB} className="logo-tucan" alt="logo" />
        </Link>


        <ul id="nav">
          <li>
            <Link to="Biodanza">Biodanza</Link>
          </li>
          <li>
          <Link to="Facilitadoras">Facilitadoras</Link>
          </li>
          <li>
          <Link to="Clases">Clases</Link>
          </li>
          <li>
          <Link to="Eventos">Eventos</Link>
          </li>
          <li>
          <Link to="Contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
