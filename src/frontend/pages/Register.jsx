import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import "./style/Login.css";
import "./style/Register.css";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    apellidos: "",
    nombre: "",
    password: "",
    curso:"1A"
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, "/login");
    //props.history.push("/");
  };
  return (
    <section className="login">
      <section className="register-container">
        <h2 tabIndex="0">Regístrate</h2>
        <form className="login-container-form" onSubmit={handleSubmit}>
          <input
            name="nombre"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="apellidos"
            className="input"
            type="text"
            placeholder="Apellidos"
            onChange={handleInput}
          />
          <div className="input op">
            <label htmlFor="curso">Curso</label>
            <select
              className="input"
              name="curso"
              id="curso"
              values={form.curso}
              onChange={handleInput}
            >
              <option>1A</option>
              <option>2B</option>
              <option>3A</option>
              <option>3B</option>
              <option>4B</option>
            </select>
          </div>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="E-mail"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarse</button>
        </form>
        <p className="login-container-register register-container-login">
          Tienes una cuenta&nbsp;
          <Link to="/login">Inicia Sesión</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(Register);
