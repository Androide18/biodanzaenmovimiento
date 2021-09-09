import React, {useState} from "react";
import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";


function Eventos() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
      <div className="home">
        <div className="text-wrap-home">
          <p> Por el momento no te estás perdiendo de ningun evento</p>
          <br></br>
          <h1 style={{color:"#EFB7BC", fontSize:"4em"}}> :) </h1>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Eventos;