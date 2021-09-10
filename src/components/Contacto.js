import React, {useState} from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";
import {FaFacebookF, FaInstagramSquare, FaWhatsapp, FaRegEnvelope} from "react-icons/fa";
import {IconContext} from "react-icons";

function Contacto() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>




      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
      <div className="contacto">
        <div className="text-wrap-contacto">
        <span><FaInstagramSquare/> @biodanzaenmovimiento</span>  
        <span><FaFacebookF/> /Biodanzaenmovimiento </span>
        <span><FaWhatsapp/> +54 9 3764 60-6399  <br /> +54 9 3764 15-8085  </span>
        <span><FaRegEnvelope/> biodanzaenmovimiento@gmail.com  </span>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contacto;