import React from "react";
import "../assets/css/App.css";
import rtLogo from "../assets/images/rt-logo.png";


function Footer() {
  return (
    <>
        <div className="footer">
        <img src={rtLogo} className="rtLogo" alt="logo" />
        <p> ✷ Posadas - Misiones - Argentina ✷ </p>
        </div>
    </>
  );
}

export default Footer;