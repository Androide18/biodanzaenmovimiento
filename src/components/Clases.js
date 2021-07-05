import React from "react";
import "../assets/css/App.css";
import logoRGB from "../assets/images/Logo_Color_RGB.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Clases() {
  return (
    <div>
       <Navbar/>
      <div className="home">

        <h1>CLASES</h1>
        <div className="text-wrap-home">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Clases;