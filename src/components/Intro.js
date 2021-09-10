import logo from "../assets/images/isologo.svg";
import React from "react";
import "../assets/css/App.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <>
      <div className="App-header">
        <Link className="link-tucan" to="/home">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p className="bienvenides">Bienvenides a</p>
        <p className="bem">Biodanza en Movimiento</p>
        <Link className="entrar" to="/home">
          <p >Entrar</p>
        </Link>
      </div>
     
    </>
  );
}

export default Intro;
