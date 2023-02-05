import React, { useState } from "react";
import "./cart.css"

function InputForm(props) {
  return (
    <div className="form_container">
      <label className="labels">
        {props.label}
      </label>
      <input className="inputs"
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}

export function FormCheckout(props) {
  const [userData, setUserData] = useState({
    Nombre: "",
    Numero: "",
    Email: "",
  });

  let fieldsForm = Object.keys(userData);
  //console.log(userData)

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    // dynamic props
    newState[inputName] = value;
    setUserData(newState);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(`Gracias por tu compra!`);
  }

  function formIsInvalid() {
    return !(
      userData.Nombre !== "" &&
      userData.Numero !== "" &&
      userData.Email !== ""
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Llena tus datos para finalizar la compra ---obligatorio--- </h3>
      {fieldsForm.map((field) => (
        <InputForm
          value={userData[field]}
          name={field}
          onChange={onInputChange}
          label={field}
          userData={userData}
        />
      ))}
      <button className="buy_button"
        onClick={(evt) => props.onCheckout(evt, userData)}
        disabled={formIsInvalid()}
        type="submit"
      >
        Crear orden
      </button>

      <button className="cleanButton" onClick={() => setUserData({ Nombre: "", Numero: "", Email: "" })}>
        Limpiar campos
      </button>
    </form>
  );
}
