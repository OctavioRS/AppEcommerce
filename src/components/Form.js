import React from "react";


const Form = () => {
  return (
    <div>
        <p>Completa tus datos para finalizar la compra</p>
      <form >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" />
        <label htmlFor="email">Repetir correo electrónico</label>
        <input type="email" name="email2" />
        <input type="submit" value="confirmar" />
      </form>
    </div>
  );
};

export default Form;
