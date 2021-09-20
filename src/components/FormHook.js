import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";

const HookForm = () => {

//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = (data, e) => {
//     console.log(data);
//     e.target.reset();
//   } 


  function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm(
          'biodanza_email_service', 
          'template_biodanza', 
          e.target, 
          'user_DVkB1a8IYeE44ZdzqlQgG'
          ).then(res=>{
            window.location.pathname = ('/inscripcionExitosa')
            console.log(res);
            
          }).catch(err=> console.log(err));

  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


 //    <form onSubmit={handleSubmit(onSubmit), sendEmail}>
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>

  <div className="facilitadoras">
    <br/><br/>
  <p> ENCUENTRO BIOCÉNTRICO CON MÚSICA EN VIVO “DE ORUGA A MARIPOSA” </p>
  <br/><br/>
       <h5>Formulario de Inscripción</h5>
  
    <form onSubmit={sendEmail} to="/inscripcionExitosa">
      <input type="text" name="name" placeholder= "Nombre"  /*{...register("Nombre", { required: true })} */ />
      <input type="text" name="lastname" placeholder= "Apellido" /*{...register("Apellido", { required: true })} *//>
      <input type="number" name="age" placeholder= "Edad" /*{...register("Edad", { required: true })}*/ />
      <input type="email" name="email" placeholder= "Email" /*{...register("Email", { required: true })}*/ />
      <input type="number" name="phone" placeholder= "Telefono" /* {...register("Telefono", { required: true })}*/ />
      <textarea type="text" name="message" rows="10" cols="22" placeholder= "Hola..." /* {...register("Hola!")}*/ />
      
    
      <input type="submit" className="send-btn" />

      
      <br />
      {/* {errors.Nombre && <span>Falta rellenar tu Nombre</span>}
      <br />
      {errors.Apellido && <span>Falta rellenar tu Apellido</span>} 
      <br />
      {errors.Edad && <span>Falta rellenar tu edad</span>}
      <br />
      {errors.Telefono && <span>Falta rellenar tu telefono</span>} */}
      
     
    </form>
    </div>
    <Footer/>
    </>
  );
}

export default HookForm;
