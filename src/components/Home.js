import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
       <Navbar/>
      <div className="home">
      
        <div className="text-wrap-home">
          
        <h4> MANIFIESTO</h4> 
          <p>Somos la memoria del mundo.</p>
          <p>Sólo debemos recordar lo que </p>
          <p>está en nuestras células. </p>
          <p>Los frutos del verano. </p>
          <p>El amor voluptuoso. </p>
          <p>La capacidad de ponerse </p>
          <p>en el lugar del otro. </p>
          <p>El contacto. </p>
          <p>El coraje de innovar. </p>
          <p>El abrazo, el adiós y el encuentro. </p>
          <p>El mar en nuestra piel. </p>
          <p>La música de la vida. </p>
          <p>La danza de la vida. </p>
          <p>Biodanza nos devuelve </p>
          <p>la memoria ancestral, </p>
          <p>la posibilidad absoluta de amor. </p>

         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
