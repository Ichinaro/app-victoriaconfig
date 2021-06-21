import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../actions/index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = (props) => {
  const handleLogout = () => {
    document.cookie = "email=";
    document.cookie = "nombre=";
    document.cookie = "apellidos=";
    document.cookie = "curso=";
    document.cookie = "id=";
    document.cookie = "token=";
    props.logoutRequest({}); //mando un objeto vacio para reiniciar el estado y así no habria ususario
    window.location.href = "/login";
  };
  return (
    <div className="navegacion">
      <ul>
        <li>
          <Link to="/"><i className="icono fas fa-home"></i></Link>
        </li>
        <li>
          <Link to="" onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  //se usa para validar que tipo de valor reciben
  user: PropTypes.object.isRequired,
  // logoutRequest se define como func por que "user: action.payload" se usa reiniciar el estado
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);