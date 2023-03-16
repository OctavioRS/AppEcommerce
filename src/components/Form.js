import React, { useState } from "react";


const Form = ( { data }) => {

  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  

  const changeName = (e) =>{ 
    
    setNombre( e.target.value) 
  }

  const changeApellido = (e) =>{
    
    setApellido(e.target.value)
  }

  const changeEmail = (e) => {
   
    setEmail(e.target.value)
  }

  const sendData = (e) => {
     e.preventDefault()
     const userData = {
      nombre: nombre,
      apellido: apellido,
      email: email
     }
     data(userData)
     
  }

  return (
    <div>
        <p>Completa tus datos para finalizar la compra</p>
      <form onSubmit={ sendData }>
        <label htmlFor="nombre" value={ nombre } onChange={ changeName } >Nombre</label>
        <input type="text" name="nombre" />
        <label htmlFor="apellido" value={ apellido } onChange={ changeApellido }>Apellido</label>
        <input type="text" name="apellido" />
        <label htmlFor="email" value={ email } onChange={ changeEmail }>Correo electrónico</label>
        <input type="email" name="email" />
        <label htmlFor="email">Repetir correo electrónico</label>
        <input type="email" name="email2"  />
        <input type="submit" value="confirmar" />
      </form>
    </div>
  );
};

export default Form;
