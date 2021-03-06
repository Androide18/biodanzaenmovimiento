import React, {useState} from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";


function Clases() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }



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
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
      <div className="clases">

        <h1>CLASES</h1>
        <div className="text-wrap-clases">
          <p>✷ <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza Presencial para jóvenes y adultes.</span> Lunes 18 hs. en Espacio Rayuela. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷ <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza Virtual para jóvenes y adultes.</span> Por Zoom. Jueves 17:00 hs. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷ <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza para niñes.</span> (De 3 a 6 años). Martes 17:15 hs. en espacio Rayuela. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷  <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza para niñes.</span> (De 7 a 11 años). Miercoles 17:15 hs. en espacio Rayuela. </p>
          <ColoredLine color="#EFB7BC"/>
          <p>✷  <span style={{color: '#1a3d42', fontSize: '20px'}}>Biodanza para niñes.</span> (De 12 a 14 años). Martes 18:30 hs. en espacio Rayuela. </p>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Clases;