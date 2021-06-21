import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createTarea} from "../actions/index";
import Banner from "../components/Banner";
import ItemVideo from "../components/ItemVideo"
import FormEdit from "../components/FormEdit"
import "./style/VideoCreate.css"

const TareaCreate = (props) => {

  const [form, setValues] = useState({
    titulo:"",
    subTitulo:"",
    url:"",
    img:""
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTarea(form, "/");
  };

  return (
    <div className="pag-videos">
      <Banner title={"CREAR TAREA"}/>
      <ItemVideo tarea={true} data={form}/>
      <FormEdit tarea={true} data={form} onSubmit={handleSubmit} onChange={handleInput}/>
    </div>
  );
};


const mapDispatchToProps = {
  createTarea,
};

TareaCreate.propTypes = {
  createTarea: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TareaCreate);