import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



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
    <h3>¡Felicidades! ¡Ya estás inscript@ al evento!</h3>
    <h4>Para abonar por favor envianos una tranferencia a la siguiente cuenta:</h4>

    <br/> <br/>
    <div className="box-cuenta">
      <p>TITULAR: María inés Caramuto</p>
      <p>Banco Macro</p>
      <p>caja ahorro</p>
      <p>CBU. 2850014040094800644768</p>
      <p>Alias: biodanza.movimiento</p>

    </div>
    <br/> <br/>

    <div className="wrap-comprobante">
    <p>Una vez realizado el pago, envíanos el comprobante para confirmar tu asistencia al siguiente mail: biodanzaenmovimiento@gmail.com</p>
    <br/> <br/>
    <p>o <u>aboná en efectivo</u> el mismo día del evento <span className="consultar">(consultar cupo)</span> .</p>
    </div>

    


    </div>
    <Footer/>
   
    </>
  );
}

export default InscripcionExitosa;
