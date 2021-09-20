import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";


const InscripcionExitosa = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>

       <div className="inscripcionExitosa">
    <h3>¡Estás a un paso de inscribirte al evento!</h3>
    <h4>Enviar dinero por Mercado Pago</h4>

    <br/> <br/>
  
      <a  className="inscripcion-btn" href="https://androide18.github.io/extra/">
      PAGAR
      </a>

    </div>
    <Footer/>
   
    </>
  );
}

export default InscripcionExitosa;
