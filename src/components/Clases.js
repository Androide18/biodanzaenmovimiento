import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Clases() {


  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop: '0.8rem',
            marginBottom: '0.8rem'
        }}
    />
);

  return (
    <div>
       <Navbar/>
      <div className="clases">

        <h1>CLASES</h1>
        <div className="text-wrap-clases">
          <p>✷ <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza Presencial para jóvenes y adultes.</span> Lunes 18 hs. en Espacio Rayuela. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷ <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza Virtual para jóvenes y adultes.</span> Por Zoom. Jueves 17hs. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷ <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza para niñes.</span> (De 3 a 6 años). Martes 17:30 hs. en espacio Rayuela. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷  <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza para niñes.</span> (De 7 a 10 años). Miercoles 18 hs. en espacio Rayuela. </p>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Clases;