import React, {useState} from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";

 

function Formasdepago() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
      <div className="inscripcionExitosa">
                       
          <div className="titulo-evento">
          <p> ENCUENTRO BIOCÉNTRICO CON MÚSICA EN VIVO </p> 
          <p> “DE ORUGA A MARIPOSA” </p>
          </div>
          <br/><br/><br/>
        
        <p>FORMAS DE PAGO</p>
        <br/>
        
          <p>Opciones:</p>  
          <br/>
          <div className="wrap-comprobante">       
<hr/>
<p>OPCION 1 - Por transferencia bancaria </p>
<hr/>
<br/> <br/>
</div>

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

<hr/>

    <p>OPCIÓN 2 - En efectivo</p>
    <hr/>
       <br/>
       <p> Podes abonar <u>en efectivo</u> el mismo día del evento <span className="consultar">(consultar cupo)</span>.</p>
    

    </div>

      </div>
      <Footer/>
    </>
  );
}

export default Formasdepago;

