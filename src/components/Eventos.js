import React, {useState} from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";
import Formulario from "./Formulario";
import FormHook from "./FormHook";
import { Link } from "react-router-dom";
import poster from "../assets/images/oruga.png";


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
         
          <div className="box-evento">
          <div className="poster">
          <img src={poster} alt="Poster" className="poster" />
          
        <div className="doble">
          <Link className="inscripcion-btn" to="/form">
          INSCRIBIRME
        </Link>
          <Link className="inscripcion-btn" to="/formasdepago">
          FORMAS DE PAGO
        </Link>
        </div>

          </div>


          <div class="box-descripcion">

          <div className="titulo-evento">
          <p> ENCUENTRO BIOCÉNTRICO CON MÚSICA EN VIVO </p> 
          <p> “DE ORUGA A MARIPOSA” </p>
          </div>
          <br/><br/><br/>

          <div className="probervio">
          <p>Sólo cuando la oruga creyó que el mundo terminaba se transformó en mariposa (Proverbio)</p>
          </div>

<p>A veces necesitamos que todo vuelva a ordenarse, reconstruirnos, reiniciarnos para florecer 
  y alcanzar aquello que soñamos y proyectamos.</p>
  <br/>

<p>En este encuentro vamos a conectarnos con la naturaleza invocando a los 4 elementos:</p>
<br/>

<p className="elementos">🌱 Tierra:  Nos da el sentido interno de seguridad, estabilidad y permanencia.</p>
<p className="elementos">🔥 Fuego: capacidad transformadora que nos invita a desarrollar nuestra propia sensualidad 
y la intensa alegría de vivir.</p>
<p className="elementos">💧 Agua: el gran limpiador del planeta que canaliza emociones y nos ayuda a desarrollar
   el amor incondicional. Nos aporta fuerza y nutrición.</p>
<p className="elementos">💨Aire: Nos llena de energía y vitalidad, alivia nuestro corazón, nos ayuda a soltar para 
  alcanzar los sueños.</p>

<br/>
<p>Todes tenemos componentes de los 4 elementos en diferentes proporciones. Rolando Toro nos invita a danzar 
los 4 elementos como proceso terapéutico danzando la función inferior, es decir aquel elemento que menos 
se expresa.</p>

<br/><br/>

<p>Te esperamos... "te vas a enamorar".   </p> 
<br/>

<p>🎵Músicos invitados: Mateo Sevi Sánchez y Cailo Riet.</p>

<br/><br/><br/>
<p><u>INVERSIÓN</u></p>
<br/>

<p>Valor: $2500 </p>
<p>Promo: $2000 (válida hasta el 4 de Octubre)</p>

          </div>
          </div>

       
        


      </div>
      <Footer/>
    </>
  );
}

export default Eventos;




