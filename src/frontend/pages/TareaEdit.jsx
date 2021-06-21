import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {updateTarea} from "../actions/index";
import Banner from "../components/Banner";
import TareaId from "../components/TareaId"
import FormEdit from "../components/FormEdit"
import "./style/TareaEdit.css"

const TareaEdit = (props) => {

  const videos = props.tareas;
  const { id } = props.match.params;
  function item() {
    const data = videos.filter((video) =>
    video._id.includes(id)
    );
    return data[0];
  }

  const [form, setValues] = useState({
    titulo:item().titulo,
    subTitulo:item().subTitulo,
    fecha:item().fecha,
    descripcion:item().descripcion
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTarea(item()._id, form, "/");
  };

  console.log("datos:",form.titulo);

  return (
    <div className="pag-videos">
      <Banner title={form.titulo}/>
      <div className="areaItem">
        <TareaId data={form}/>
      </div>
      <FormEdit tarea={true} data={form} onSubmit={handleSubmit} onChange={handleInput}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas,
  };
};

const mapDispatchToProps = {
  updateTarea,
};

TareaEdit.propTypes = {
  updateTarea: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TareaEdit);