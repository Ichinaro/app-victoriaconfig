import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {updateArticulo} from "../actions/index";
import Banner from "../components/Banner";
import ItemVideo from "../components/ItemVideo"
import FormEdit from "../components/FormEdit"

const ArticuloEdit = (props) => {

  const videos = props.articulos;
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
    autor:item().autor,
    img:item().img,
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
    props.updateArticulo(item()._id, form, "/");
  };

  console.log("datos:",form.titulo);

  return (
    <div className="pag-videos">
      <Banner title={"ARTÍCULOS"}/>
      <ItemVideo articulo={true} data={form}/>
      <FormEdit articulo={true} data={form} onSubmit={handleSubmit} onChange={handleInput}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articulos: state.articulos,
  };
};

const mapDispatchToProps = {
  updateArticulo,
};

ArticuloEdit.propTypes = {
  updateArticulo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticuloEdit);