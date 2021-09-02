import React from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
       <Navbar/>
      <div className="home">
      
        <div className="text-wrap-home">
          
        <h4> MANIFIESTO</h4> 
        <p> Somos la memoria del mundo. </p>
        <p> Sólo debemos recordar lo que </p>
        <p>está en nuestras células,</p>
        <p>los frutos del verano,</p>
        <p>el amor voluptuoso,</p>
        <p>la capacidad de ponerse en el lugar del otro,</p>
        <p>el contacto, el coraje de innovar, el abrazo, el adios y el encuentro.</p>
        <p>El mar en nuestra piel, la música de la vida.</p>
        <p>Biodanza nos devuelve la memoria ancestral.</p>
        <p>La posibilidad absoluta del amor.</p>

        <h5 className="author"> Rolando Toro Araneda.</h5>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
