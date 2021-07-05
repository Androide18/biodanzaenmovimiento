import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {FaFacebookF, FaInstagramSquare, FaWhatsapp, FaRegEnvelope} from "react-icons/fa";
import {IconContext} from "react-icons";

function Contacto() {

  

  return (
    <div>

<IconContext.Provider value ={{color: "#EFB7BC", size: "2em"}}>


       <Navbar/>
      <div className="home">
        <div className="text-wrap-contacto">
        <span><FaInstagramSquare/> @biodanzaenmovimiento</span>  
        <span><FaFacebookF/> /Biodanzaenmovimiento </span>
        <span><FaWhatsapp/> +54 376 00000000  // 376 1111111  </span>
        <span><FaRegEnvelope/> biodanzaenmovimiento@gmail.com  </span>
        </div>
      </div>
      <Footer/>
      </IconContext.Provider>
    </div>
  );
}

export default Contacto;