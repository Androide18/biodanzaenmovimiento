import React, {useState} from 'react';


const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }

    return (
        <>
        <h1>Formulario</h1>
        <form onSubmit={enviarDatos}>
            <input 
            type="text" 
            placeholder="Nombre"
            name="nombre"
            onChange={handleInputChange}
            ></input>
            <input 
            type="text" 
            placeholder="Apellido"
            name="apellido"
            onChange={handleInputChange}
            ></input>
            <button type="submit">Enviar</button>
        </form>
        <h3>{datos.nombre} - {datos.apellido}</h3>
        </>
         );
}


export default Formulario;