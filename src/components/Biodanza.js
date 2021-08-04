import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Biodanza() {
  return (
    <div>
       <Navbar/>
      <div className="biodanza">

        <h1>¿QUÉ ES BIODANZA?</h1>
        <div className="text-wrap-biodanza">
         
        <p>Es un sistema de integración afectiva para armonizar nuestro cuerpo, nuestras emociones y nuestras acciones. </p>
        <p>Con música y movimiento danzamos nuestra propia existencia logrando un mayor bienestar.</p>
        <p>  Es un espacio para desarrollar nuestras habilidades para transmitirlas, transformarnos, renovarnos e integrarnos.</p>
        <p>  Un mundo donde poder conectarnos con la mirada, el abrazo, el movimiento natural.</p>
        <p>Un espacio donde cada mirada anuncia el milagro de sentirnos vivos... calmar la mente y abrir el corazón.</p>
    </div>
    <div className="cuadro-biodanza">

        <h2 style={{color: '#92c998'}} >Biodanza...</h2>

        <h3><span  style={{color: '#92c998'}}>Bio:</span> vida   </h3>
        <h3><span  style={{color: '#92c998'}}>danza:</span> movimiento pleno de sentido</h3>
</div>
<div  className="text-wrap-biodanza">
        <p>Posibilidad de danzar tu propia vida. </p>
        <p>Poner ritmo, armonía, emociones en la vida personal y también en la vida de la comunidad.</p>

        <p>Está dirigida a estimular aspectos específicos de la persona, como la afectividad, la creatividad, la vitalidad. Por ello se han seleccionado grupos de ejercicios y de músicas que estimulan esas funciones universales.</p>

       
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Biodanza;