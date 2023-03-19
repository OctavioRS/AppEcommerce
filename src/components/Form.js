import React, { useState } from "react";

const Form = ({ onConfirm }) => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState(null);

  const changeName = (e) => {
    setNombre(e.target.value);
  };

  const changeApellido = (e) => {
    setApellido(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const repeatEmail = (e) => {
    setEmail2(e.target.value);
    if (e.target.value !== email ) {
      setError("Los correos ingresados no coinciden");
    } else {
      setError(null);
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    if (nombre !== "" && apellido !== "" && email !== "" && error === null) {
      const userData = {
        nombre: nombre,
        apellido: apellido,
        email: email,
      };
      onConfirm(userData);
    }
  };
  

  return (
    <div>
      <p>Completa tus datos para confirmar la compra</p>
      <form onSubmit={sendData}>
        <label htmlFor="nombre" value={nombre}>
          Nombre
        </label>
        <input type="text" name="nombre" onChange={changeName} />
        <label htmlFor="apellido" value={apellido}>
          Apellido
        </label>
        <input type="text" name="apellido" onChange={changeApellido} />
        <label htmlFor="email" value={email}>
          Correo electrónico
        </label>
        <input type="email" name="email" onChange={changeEmail} />
        <label htmlFor="email" value={email2}>
          Repetir correo electrónico
        </label>
        <input type="email" name="email2" onBlur={repeatEmail} />
        {error && <p>{error}</p>}
        <button type="submit"> Confirmar </button>
      </form>
    </div>
  );
};

export default Form;


