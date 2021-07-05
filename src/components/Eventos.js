import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Eventos() {
  return (
    <div>
       <Navbar/>
      <div className="home">
        <div className="text-wrap-home">
          <p> Por el momento no te estás perdiendo de ningun evento</p>
          <br></br>
          <h1 style={{color:"#EFB7BC", fontSize:"4em"}}> :) </h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Eventos;