import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createArticulo} from "../actions/index";
import Banner from "../components/Banner";
import ItemVideo from "../components/ItemVideo"
import FormEdit from "../components/FormEdit"
import "./style/VideoCreate.css"

const ArticuloCreate = (props) => {

  const [form, setValues] = useState({
    titulo:"",
    subTitulo:"",
    autor:"",
    img:"",
    fecha:"",
    descripcion:""
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createArticulo(form, "/");
  };

  return (
    <div className="pag-videos">
      <Banner title={"CREAR BLOG"}/>
      <ItemVideo articulo={true} data={form}/>
      <FormEdit articulo={true} data={form} onSubmit={handleSubmit} onChange={handleInput}/>
    </div>
  );
};

const mapDispatchToProps = {
  createArticulo,
};

ArticuloCreate.propTypes = {
  createArticulo: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ArticuloCreate);