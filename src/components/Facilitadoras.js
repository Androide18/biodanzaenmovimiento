import React from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mica from "../assets/images/mica.png";
import ami from "../assets/images/ami.png";

function Facilitadoras() {
  return (
    <div>
      <Navbar />
      <div className="facilitadoras">
        <h1>FACILITADORAS</h1>
        <div className="text-wrap-facilitadoras">
          <div className="card-box">
            <img src={mica} alt="Mica" width="300px" />
            <p className="p-box">
            <h3>María Inés Caramuto</h3>

            <p>Profesora de Educación Inicial.</p>
            <p>Profesora en Psicopedagogía.</p>
            <p> Lic. en Educación.</p>
            <p>Profesora de Biodanza.</p>

            <h5>Posgrados</h5>  

            <p>Educación Biocéntrica.</p>
            <p> Biodanza para niñes.</p>
            <p>Identidad y los 4 elementos.</p>
            <p>Biodanza y chamanismo.</p>
            <p>Estrategias metodológicas.</p>
             
            </p>
          </div>
          <div className="card-box">
            <img src={ami} alt="Ami" width="300px" />
            <p className="p-box">
            <h3>Amanda Alsina</h3>

            <p> Profesora en Educación Especial.</p>
            <p> Mgter en Ciencias de la Educación.</p>
            <p> Tallerista de teatro.</p>
            <p> Facilitadora de Biodanza.</p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facilitadoras;
