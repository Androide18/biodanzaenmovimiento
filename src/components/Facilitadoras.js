import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mica from "../assets/images/mica.png";
import ami from "../assets/images/ami.png";

function Facilitadoras() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>FACILITADORAS</h1>
        <div className="text-wrap-facilitadoras">
          <div className="card-box">
            <img src={mica} alt="Mica" width="300px" />
            <p className="p-box">
             ¡Hola! Soy Mica. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
             
            </p>
          </div>
          <div className="card-box">
            <img src={ami} alt="Ami" width="300px" />
            <p className="p-box">
            ¡Hola! Soy Ami. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facilitadoras;
