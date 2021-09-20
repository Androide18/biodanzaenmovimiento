import React, {useState} from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";
import Formulario from "./Formulario";
import FormHook from "./FormHook";
import { Link } from "react-router-dom";

 

function Eventos() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
      <div className="inscripcionExitosa">
          <p> ENCUENTRO BIOCÉNTRICO CON MÚSICA EN VIVO “DE ORUGA A MARIPOSA” </p>
          <br/><br/><br/>
          {/* <h1 style={{color:"#EFB7BC", fontSize:"4em"}}> :) </h1> */}
          <Link className="inscripcion-btn" to="/form">
          INSCRIBIRME
        </Link>
       
        


      </div>
      <Footer/>
    </>
  );
}

export default Eventos;




